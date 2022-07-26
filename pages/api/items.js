// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      title: "Café Molido Brasil 500g",
      price: 100,
      image:
        "https://cafemartinez.vtexassets.com/arquivos/ids/155522-1200-auto?v=637463658780130000&width=1200&height=auto&aspect=true",
      description:
        "Variedad de café molido Brasil de Café Martínez.Pack reforzado especialmente para conservar el café de 500g. Recomendado para cafeteras de filtro",
    },
    {
      id: 1,
      title: "Café Molido Selecto 500g",
      price: 80,
      image:
        "https://cafemartinez.vtexassets.com/arquivos/ids/155537-1200-auto?v=637463658821500000&width=1200&height=auto&aspect=true",
      description:
        "Variedad de café molido Selecto de 500g de Café Martínez. Pack reforzado especialmente para conservar el café. Recomendado para cafeteras de filtro.",
    },
    {
      id: 2,
      title: "Café Molido Colombia 250g",
      price: 120,
      image:
        "https://cafemartinez.vtexassets.com/arquivos/ids/155515-1200-auto?v=637463658759930000&width=1200&height=auto&aspect=true",
      description:
        "Variedad de café molido Colombia de 250g de Café Martínez. Pack reforzado especialmente para conservar el café. Recomendado para cafeteras de filtro.",
    },
    {
      id: 3,
      title: "Café Molido Intenso 250g",
      price: 40,
      image:
        "https://cafemartinez.vtexassets.com/arquivos/ids/155513-1200-auto?v=637463658754000000&width=1200&height=auto&aspect=true",
      description:
        "Para los amantes de un café torrado fuerte, con cuerpo y sabor bien definido. Gran aroma",
    },
    {
      id: 4,
      title: "Café Molido Tipo Italiano 500g",
      price: 320,
      image:
        "https://cafemartinez.vtexassets.com/arquivos/ids/155523-1200-auto?v=637463658782630000&width=1200&height=auto&aspect=true",
      description:
        "Variedad de café molido Tipo Italiano de 500g de Café Martínez. Pack reforzado especialmente para conservar el café",
    },
  ]);
}
