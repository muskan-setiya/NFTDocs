// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract CollegePlatform is ReentrancyGuard{

    uint public recordCount;
    struct Record{
        uint recordId;
        IERC721 nft;
        uint tokenId;
        address student; 
        bool sent;
    }
    event RecordCreated(
        uint recordId,
        address indexed nft,
        uint tokenId,
        address indexed teacher
    );
     event Sent(
        uint recordId,
        address indexed nft,
        uint tokenId,
        address indexed student
    );


    mapping(uint =>Record) public records;
    mapping(uint=>address) public checkTokenIdWithStudentAddress;

    function makeRecord(IERC721 _nft,uint _tokenId,address student) external nonReentrant{
        recordCount++;
        _nft.transferFrom(msg.sender,address(this),_tokenId);
        checkTokenIdWithStudentAddress[_tokenId] = student;
        records[recordCount]=Record(
            recordCount,
            _nft,
            _tokenId,
            student,
            false
        );

        emit RecordCreated(
            recordCount,
            address(_nft),
            _tokenId,
            msg.sender
        );
    }


    function transferRecord(uint _recordId,address student) external nonReentrant {
        Record storage record = records[_recordId];
    
        require(_recordId > 0 && _recordId <= recordCount, "Record doesn't exist");
        require(!record.sent, "Record already sent to student");

        require(checkTokenIdWithStudentAddress[record.tokenId]==student,"Not the record of particular student");
       
        record.sent = true;
        
        record.nft.transferFrom(address(this),student,record.tokenId);
       
        emit Sent(
            _recordId,
            address(record.nft),
            record.tokenId,
            student
        );
        
    }
  
}