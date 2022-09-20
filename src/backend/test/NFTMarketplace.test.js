const { expect } = require("chai"); 

//const toWei = (num) => ethers.utils.parseEther(num.toString())
//const fromWei = (num) => ethers.utils.formatEther(num)

describe("NFTCollegeplatform", function () {

  let NFT;
  let nft;
  let CollegePlatform;
  let collegeplatform;
  //let deployer;
  let addr1;
  let addr2;
  let addrs;
  let addr3;
  //let feePercent = 1;
  let URI = "sample URI"

  beforeEach(async function () {
    // Get the ContractFactories and Signers here.
    NFT = await ethers.getContractFactory("NFT");
    CollegePlatform = await ethers.getContractFactory("CollegePlatform");
    [deployer, addr1, addr2,addr3, ...addrs] = await ethers.getSigners();

    // To deploy our contracts
    nft = await NFT.deploy();
    collegeplatform = await CollegePlatform.deploy();
  });

  describe("Deployment", function () {

    it("Should track name and symbol of the nft collection", async function () {
      // This test expects the owner variable stored in the contract to be equal
      // to our Signer's owner.
      const nftName = "DApp NFT"
      const nftSymbol = "DAPP"
      expect(await nft.name()).to.equal(nftName);
      expect(await nft.symbol()).to.equal(nftSymbol);
    });
  });

  describe("Minting NFTs", function () {

    it("Should track each minted NFT", async function () {
      // addr1 mints an nft
      await nft.connect(addr1).mint(URI)
      expect(await nft.tokenCount()).to.equal(1);
      expect(await nft.balanceOf(addr1.address)).to.equal(1);
      expect(await nft.tokenURI(1)).to.equal(URI);
      // addr2 mints an nft
      await nft.connect(addr2).mint(URI)
      expect(await nft.tokenCount()).to.equal(2);
      expect(await nft.balanceOf(addr1.address)).to.equal(1);
      expect(await nft.tokenURI(2)).to.equal(URI);
    });
  })

  describe("Making College record", function () {
    //let price = 1
    let result 
    beforeEach(async function () {
      // addr1 mints an nft
      await nft.connect(addr1).mint(URI)
      // addr1 approves collegeplatform to spend nft
      await nft.connect(addr1).setApprovalForAll(collegeplatform.address, true)
    })
    it("Should track newly created record, transfer NFT from sir to CollegePlatform and emit RecordCreated event", async function () {
      // addr1 offers their nft at a price of 1 ether
      await expect(collegeplatform.connect(addr1).makeRecord(nft.address, 1,addr3.address))
        .to.emit(collegeplatform, "RecordCreated")
        .withArgs(
          1,
          nft.address,
          1,
          addr1.address
        )
      // Owner of NFT should now be the CollegePlatform
      expect(await nft.ownerOf(1)).to.equal(collegeplatform.address);
      // Item count should now equal 1
      expect(await collegeplatform.recordCount()).to.equal(1)
      // Get item from items mapping then check fields to ensure they are correct
      const Record = await collegeplatform.records(1)
      expect(Record.recordId).to.equal(1)
      expect(Record.nft).to.equal(nft.address)
      expect(Record.tokenId).to.equal(1)   
      expect(Record.student).to.equal(addr3.address)
      expect(Record.sent).to.equal(false)
    });
  })
  describe("Transfering records", function () {
    beforeEach(async function () {
      // addr1 mints an nft
      await nft.connect(addr1).mint(URI)
      // addr1 approves collegeplatform to spend tokens
      await nft.connect(addr1).setApprovalForAll(collegeplatform.address, true)
      // addr1 makes their nft a collegeplatform record.
      await collegeplatform.connect(addr1).makeRecord(nft.address, 1,addr3)
    })
    it("Should update record as sent, transfer NFT to student and emit a RecordCreated event", async function () {
    
      await expect(collegeplatform.connect(addr3).transferRecord(1,addr3))
      .to.emit(collegeplatform, "Sent")
        .withArgs(
          1,
          nft.address,
          1,
          addr3.address
        )
     
      // Item should be marked as sent
      expect((await collegeplatform.records(1)).sent).to.equal(true);
      
      expect(await nft.ownerOf(1)).to.equal(addr3.address);
    })
})
})