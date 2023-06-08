// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16;

contract Book {
    mapping(address => uint256) public bookRewards; // Lưu trữ số lượng tiền coin của mỗi địa chỉ người dùng
    mapping(address => uint256) public lastReadTime; // Lưu trữ thời gian đọc sách lần cuối của mỗi địa chỉ người dùng

    uint256 public constant COOLDOWN_PERIOD = 180 minutes; // Thời gian cooldown giữa các lần đọc sách (30 phút)
    uint256 public constant TOKEN_REWARD = 0.000033 ether; // Số lượng token nhận được cho việc đọc sách (0.000033 ether)

    function readBook() external {
        require(block.timestamp >= lastReadTime[msg.sender] + COOLDOWN_PERIOD, "Cooldown period not over"); // Kiểm tra xem thời gian cooldown đã qua hay chưa
        
        // Logic để đọc sách và cấp phát tiền coin
        // ...

        uint256 reward = TOKEN_REWARD; // Số tiền coin nhận được cho việc đọc sách (0.000033 ether)
        bookRewards[msg.sender] += reward; // Tăng số lượng tiền coin của người dùng
        lastReadTime[msg.sender] = block.timestamp; // Ghi nhận thời gian đọc sách mới nhất
    }

    function getCooldownTimeRemaining(address user) external view returns (uint256) {
        uint256 cooldownEndTime = lastReadTime[user] + COOLDOWN_PERIOD; // Tính thời gian kết thúc cooldown
        if (block.timestamp >= cooldownEndTime) {
            return 0; // Nếu thời gian hiện tại vượt qua thời gian kết thúc cooldown, trả về 0
        } else {
            return cooldownEndTime - block.timestamp; // Nếu thời gian hiện tại chưa vượt qua thời gian kết thúc cooldown, trả về thời gian còn lại
        }
    }
    function maxCoolDownColum(address user) external view returns(uint256){
        uint256 
    }
}
