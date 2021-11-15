var counter = 100; // ประกาศตัวเลขที่ต้องการ เช่น 1 - 100

// นำมา Loop โดยใช้ for โดยให้ i <= counter
for (let i = 1; i <= counter; i++) {
    var divisible = ""; // ประกาศตัวแปรเพื่อนำมาเก็บผลลัทธ์

    // เขียน Check if ว่า i หาร 3 เอาเศษเป็น 0 ให้เก็บค่า 'Three' ลงตัวแปร divisible
    if (i % 3 == 0) {
        divisible += "Three";
    }
    // เขียน Check if ว่า i หาร 5 เอาเศษเป็น 0 ให้เก็บค่า 'Five' ลงตัวแปร divisible
    if (i % 5 == 0) {
        divisible += "Five";
    }

    console.log(divisible || i); // นำมาโชว์ใน .log โดย Check ว่า divisible ถ้ามีค่าให้โชว์ Three,Five หรือถ้าไม่มีค่าให้โชว์ i แทน
}