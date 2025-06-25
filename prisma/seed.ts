import { PrismaClient, StockStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ลบข้อมูลเก่า
  await prisma.stockItem.deleteMany();

  // ฟังก์ชันแปลง status
  const convertStatus = (status: string): StockStatus => {
    switch (status) {
      case "in_stock":
        return StockStatus.IN_STOCK;
      case "low_stock":
        return StockStatus.LOW_STOCK;
      case "out_of_stock":
        return StockStatus.OUT_OF_STOCK;
      default:
        return StockStatus.IN_STOCK;
    }
  };

  // เพิ่มข้อมูลตัวอย่างทั้ง 20 รายการ
  const stockItems = [
    {
      sku: "SKU001",
      name: "iPhone 15 Pro Max 256GB",
      category: "อิเล็กทรอนิกส์",
      currentStock: 45,
      minStock: 10,
      maxStock: 100,
      price: 45900,
      status: convertStatus("in_stock"),
      supplier: "Apple Thailand",
    },
    {
      sku: "SKU002",
      name: "Samsung Galaxy S24 Ultra",
      category: "อิเล็กทรอนิกส์",
      currentStock: 8,
      minStock: 15,
      maxStock: 80,
      price: 42900,
      status: convertStatus("low_stock"),
      supplier: "Samsung Electronics",
    },
    {
      sku: "SKU003",
      name: 'MacBook Air M3 13"',
      category: "คอมพิวเตอร์",
      currentStock: 0,
      minStock: 5,
      maxStock: 30,
      price: 39900,
      status: convertStatus("out_of_stock"),
      supplier: "Apple Thailand",
    },
    {
      sku: "SKU004",
      name: "AirPods Pro 2nd Gen",
      category: "อุปกรณ์เสริม",
      currentStock: 125,
      minStock: 20,
      maxStock: 150,
      price: 8900,
      status: convertStatus("in_stock"),
      supplier: "Apple Thailand",
    },
    {
      sku: "SKU005",
      name: "Dell XPS 13 Plus",
      category: "คอมพิวเตอร์",
      currentStock: 12,
      minStock: 8,
      maxStock: 40,
      price: 52900,
      status: convertStatus("in_stock"),
      supplier: "Dell Technologies",
    },
    {
      sku: "SKU006",
      name: 'iPad Pro 12.9" M2',
      category: "อิเล็กทรอนิกส์",
      currentStock: 28,
      minStock: 10,
      maxStock: 60,
      price: 35900,
      status: convertStatus("in_stock"),
      supplier: "Apple Thailand",
    },
    {
      sku: "SKU007",
      name: "Sony WH-1000XM5",
      category: "อุปกรณ์เสริม",
      currentStock: 3,
      minStock: 8,
      maxStock: 40,
      price: 12900,
      status: convertStatus("low_stock"),
      supplier: "Sony Thailand",
    },
    {
      sku: "SKU008",
      name: "ASUS ROG Strix G15",
      category: "คอมพิวเตอร์",
      currentStock: 0,
      minStock: 5,
      maxStock: 25,
      price: 45900,
      status: convertStatus("out_of_stock"),
      supplier: "ASUS Thailand",
    },
    {
      sku: "SKU009",
      name: "Apple Watch Series 9",
      category: "อุปกรณ์เสริม",
      currentStock: 67,
      minStock: 15,
      maxStock: 80,
      price: 13900,
      status: convertStatus("in_stock"),
      supplier: "Apple Thailand",
    },
    {
      sku: "SKU010",
      name: "Microsoft Surface Pro 9",
      category: "คอมพิวเตอร์",
      currentStock: 15,
      minStock: 8,
      maxStock: 35,
      price: 38900,
      status: convertStatus("in_stock"),
      supplier: "Microsoft Thailand",
    },
    {
      sku: "SKU011",
      name: "Google Pixel 8 Pro",
      category: "อิเล็กทรอนิกส์",
      currentStock: 22,
      minStock: 10,
      maxStock: 50,
      price: 32900,
      status: convertStatus("in_stock"),
      supplier: "Google Store",
    },
    {
      sku: "SKU012",
      name: "Logitech MX Master 3S",
      category: "อุปกรณ์เสริม",
      currentStock: 4,
      minStock: 12,
      maxStock: 60,
      price: 3590,
      status: convertStatus("low_stock"),
      supplier: "Logitech Thailand",
    },
    {
      sku: "SKU013",
      name: "HP Spectre x360 14",
      category: "คอมพิวเตอร์",
      currentStock: 0,
      minStock: 6,
      maxStock: 30,
      price: 42900,
      status: convertStatus("out_of_stock"),
      supplier: "HP Thailand",
    },
    {
      sku: "SKU014",
      name: "Nintendo Switch OLED",
      category: "อิเล็กทรอนิกส์",
      currentStock: 89,
      minStock: 20,
      maxStock: 100,
      price: 12500,
      status: convertStatus("in_stock"),
      supplier: "Nintendo Thailand",
    },
    {
      sku: "SKU015",
      name: "Razer DeathAdder V3",
      category: "อุปกรณ์เสริม",
      currentStock: 156,
      minStock: 30,
      maxStock: 200,
      price: 2290,
      status: convertStatus("in_stock"),
      supplier: "Razer Store",
    },
    {
      sku: "SKU016",
      name: "Lenovo ThinkPad X1 Carbon",
      category: "คอมพิวเตอร์",
      currentStock: 7,
      minStock: 5,
      maxStock: 25,
      price: 48900,
      status: convertStatus("in_stock"),
      supplier: "Lenovo Thailand",
    },
    {
      sku: "SKU017",
      name: "Xiaomi 13T Pro",
      category: "อิเล็กทรอนิกส์",
      currentStock: 2,
      minStock: 10,
      maxStock: 60,
      price: 19990,
      status: convertStatus("low_stock"),
      supplier: "Xiaomi Thailand",
    },
    {
      sku: "SKU018",
      name: "JBL Charge 5",
      category: "อุปกรณ์เสริม",
      currentStock: 0,
      minStock: 15,
      maxStock: 80,
      price: 5990,
      status: convertStatus("out_of_stock"),
      supplier: "JBL Thailand",
    },
    {
      sku: "SKU019",
      name: "Acer Predator Helios 300",
      category: "คอมพิวเตอร์",
      currentStock: 18,
      minStock: 8,
      maxStock: 40,
      price: 39900,
      status: convertStatus("in_stock"),
      supplier: "Acer Thailand",
    },
    {
      sku: "SKU020",
      name: "OnePlus 12",
      category: "อิเล็กทรอนิกส์",
      currentStock: 34,
      minStock: 12,
      maxStock: 70,
      price: 28990,
      status: convertStatus("in_stock"),
      supplier: "OnePlus Thailand",
    },
  ];

  // สร้างข้อมูลในฐานข้อมูล
  for (const item of stockItems) {
    await prisma.stockItem.create({
      data: item,
    });
  }

  console.log(
    `✅ Seed data created successfully! Added ${stockItems.length} items.`
  );

  // แสดงสถิติ
  const stats = await prisma.stockItem.groupBy({
    by: ["status"],
    _count: {
      status: true,
    },
  });

  console.log("📊 Stock Status Summary:");
  stats.forEach((stat) => {
    console.log(`   ${stat.status}: ${stat._count.status} items`);
  });
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
