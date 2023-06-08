const Book = artifacts.require("Book");

contract("Book", (accounts) => {
  let bookInstance;

  beforeEach(async () => {
    bookInstance = await Book.new();
  });

  it("should reward user with tokens after reading a book", async () => {
    const user = accounts[0];

    // Lưu trữ số lượng tiền coin trước khi đọc sách
    const initialBalance = await bookInstance.bookRewards(user);

    // Đọc sách
    await bookInstance.readBook({ from: user });

    // Lưu trữ số lượng tiền coin sau khi đọc sách
    const updatedBalance = await bookInstance.bookRewards(user);

    // Kiểm tra số lượng tiền coin đã tăng sau khi đọc sách
    assert(updatedBalance > initialBalance, "Reward not given after reading a book");
  });

  it("should have cooldown period between reading books", async () => {
    const user = accounts[0];

    // Đọc sách lần đầu
    await bookInstance.readBook({ from: user });

    // Đọc sách lần thứ hai trong khoảng thời gian cooldown
    try {
      await bookInstance.readBook({ from: user });
      assert.fail("Should have thrown an exception");
    } catch (error) {
      assert(error.message.includes("Cooldown period not over"), "Incorrect error message");
    }
  });
});
