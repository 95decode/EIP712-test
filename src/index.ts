import { ethers } from "ethers";

console.log("foo");

/*
//opensea 판매

//판매요청 할 땐 offer에 NFT address가 들어감
//consideration에 

offerer:                0x00000000879Cd60de9fEaC82452cead7a07E18df
offer:
    0:
        itemType:               3
        token:                  0xf4910C763eD4e47A585E2D34baA9A4b611aE448C
        identifierOrCriteria:   26619039577437299911163399769710260516701829832116434141119142590764602621954
        startAmount:            1
        endAmount:              1
consideration:
    0:
        itemType:               0
        token:                  0x0000000000000000000000000000000000000000
        identifierOrCriteria:   0
        startAmount:            975000000000000000
        endAmount:              975000000000000000
        recipient:              0x00000000879Cd60de9fEaC82452cead7a07E18df
    1:
        itemType:               0
        token:                  0x0000000000000000000000000000000000000000
        identifierOrCriteria:   0
        startAmount:            25000000000000000
        endAmount:              25000000000000000
        recipient:              0x0000a26b00c1F0DF003000390027140000fAa719
startTime:              1670222775
endTime:                1672901175
orderType:              1
zone:                   0x0000000000000000000000000000000000000000
zoneHash:               0x0000000000000000000000000000000000000000000000000000000000000000
salt:                   24446860302761739304752683030156737591518664810215442929810707588564197700958
conduitKey:             0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000
counter:                0
*/

/*
//opensea 구매

//구매요청 할 땐 offer에 WETH address가 들어감
//consideration에 NFT address가 들어감

offerer:                0x3ad9D7AD429Dfeb4403a3E9e7C87AC9A93B3771D
offer:
    0:
        itemType:               1
        token:                  0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6
        identifierOrCriteria:   0
        startAmount:            5000000000000000
        endAmount:              5000000000000000
consideration:
    0:
        itemType:               3
        token:                  0x804159144AEFB1Dc17B171afCefA5B33746c722F
        identifierOrCriteria:   26619039577437299911163399769710260516701829832116434141119142590764602621954
        startAmount:            1
        endAmount:              1
        recipient:              0x3ad9D7AD429Dfeb4403a3E9e7C87AC9A93B3771D
    1:
        itemType:               1
        token:                  0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6
        identifierOrCriteria:   0
        startAmount:            125000000000000
        endAmount:              125000000000000
        recipient:              0x0000a26b00c1F0DF003000390027140000fAa719
startTime:              1670224147
endTime:                1670483340
orderType:              1
zone:                   0x0000000000000000000000000000000000000000
zoneHash:               0x0000000000000000000000000000000000000000000000000000000000000000
salt:                   24446860302761739304752683030156737591518664810215442929816199780567846107279
conduitKey:             0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000
counter:                0

*/
/*

(
    0 : Non-executed
    1 : Executed
    2 : Canceled
)
mapping(address => mapping( => uint8)) internal _state

(
    0 : ETH
    1 : ERC20
    2 : ERC721
    3 : ERC1155
)
enum TokenType{
    ETH,
    ERC20,
    ERC721,
    ERC1155
}

offerer:        address
offer:
    0:  (from offerer)
        type:           TokenType
        contract:       address
        tokenId:        uint256
        amount:         uint256
receipt:
    0:  (to recipient)
        type:           TokenType
        contract:       address
        tokenId:        uint256
        amount:         uint256
        recipient:      address
    1:  (to admin)
        type:           TokenType
        contract:       address
        tokenId:        uint256
        amount:         uint256
        recipient:      address (admin)
startTime:      uint256
endTime:        uint256
salt:           bytes32
*/