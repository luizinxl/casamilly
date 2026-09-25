export const brandData = {
  name: "Casa Milly",
  subtitle: "Bolos Artesanais Sob Encomenda • Feito com amor",
  whatsapp: {
    number: "(11) 96172-8328",
    url: "https://wa.me/5511961728328",
    defaultMessage: "Olá! Vim pelo site da Casa Milly e gostaria de tirar uma dúvida"
  },
  instagram: {
    handle: "@casamilly_",
    url: "https://instagram.com/casamilly_"
  },
  images: {
    logoMain: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVz3ip2mhGVPylQoFg7WHb4FzDu54G_hlM2rny3LqDp9BFDGNgms9JY2lqjeK9_A2tPI_XJgMNQ7nT3ZtgfM93bht-b9LM7yHx837DYG3s0CBOf9BoSWy4nfF_NZu2-MSdxw8t45tXuDt_1vcUCQ5wSqdildGNE8yqpDTKhB52QMNF5EFejN7kuLmeJfifIh2w0qINB8pKUm0eFDH42D3k9TIfAVYucfvZuPXhN1xv2i8mBs6Lst6gC4o5ll7a_ChPTQ",
    logoFooter: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKG_TKR9ZywcBk2Du9vZ2J0JxSw1m7kyS1sE4arG71xvp01-fyiE7E90NgG6yDr6G_sshH_liPtOBK6XtUy0zj5p6Llck3NLyBhNlfj1v-Nzxg4INYo8TUc2WW_BTQzQF8RVTQqWyMIkRYGs1LPtF6r0Yen4BIeEEz0C7-2rIH7aVvDovYFbnxSn9zm9BDdfRvnQ92tut7moQv_F8b5Yq4WK_nOg6CMgBq3zVD5znxOlJ0gVLNjEtr",
    footerDecor: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3j5LebnK-7aIR4PQwhFNcR7IwKF5-S4TaiKS2_59XJberUx8Re_V9H6x1Ux9dgyayOC6o8TYZhvYIfGY-r-aqJDHyql55V6S33T_rpE-ljlO8v64Di-5VSLeBb1dtyjHcQiHCcRl7loW5ii7WJyYaMiEWncxzFS3Wyh89hteTWsrajO7MkYbhp_ebS_M7_v8tof7wrcPjt-Oo9mqlNpEBla_3aXX1CZMaIPJXn818caAUhvbZ0X9toEoU-jhSm8qYeA"
  }
};

export const productsData = [
  {
    id: "morango-cravejado",
    name: "morango cravejado",
    description: "massa de baunilha artesanal, camadas generosas de recheio de brigadeiro de leite em pó com morangos frescos e selecionados, e uma casquinha do famoso chocolate branco cravejado.",
    price: "R$18,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWnF0ATvGkizw_Be3NHXRR-ptCFJmsonSZjhYqPkJt1AU4mrcN-6nqVFaiNJKxXK-VvoyUZbLPxFCihcoYbVsWI_w-5IzPOgj9_-4Y7ZX0v9Xlt7h_R6DSlK_E3hgtynx6kCPxSP_xSpgE9a8fw5uyGCJeZJ6Mezr4un6r0ypMOIRiEx8_-gzcoj0odzya4HLPvOLgkaOTOeLkZ4IiieGYj92NkRzNZGH9RhmX1rmCEGQeoFIs1ZnQ",
    whatsappMessage: "Olá! Gostaria de encomendar o bolo no pote *morango cravejado* (R$18,00)"
  },
  {
    id: "dois-amores",
    name: "dois amores",
    description: "massa de chocolate artesanal, com camadas generosas de recheio de brigadeiro de leite em pó e brigadeiro de chocolate.",
    price: "R$15,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgJm378tzaNEuLkDMtjQJjmZ6xMX33TU4fR6c0YCxlOBmZCIeOezV3MRuAG8OuX_ufsmuO_WxZqjSmpQY2y4ykvQbBlR3YNy_jur5NCFndlbxxtCpNED0AXSgzuEuLtHs4MxrCJ3jdkKyqTB7Wca_WfmPmaIWqlgBoP1ml0tjRNMtn-DhB4P3YwWsXx6Na-Hq8vUD3doqoZLt-N5_YZ6yCQP1UIQVAgjEusJ60SyfLM1RWXT7e17O-",
    whatsappMessage: "Olá! Gostaria de encomendar o bolo no pote *dois amores* (R$15,00)"
  }
];

export const deliveryData = {
  title: "entrega e retirada",
  subtitle: "Logística",
  items: [
    {
      title: "Entrega:",
      description: "entrega por motoboy, com taxa de entrega conforme a distância",
      note: "aos domingos, a entrega é por nossa conta para regiões próximas"
    },
    {
      title: "Retirada:",
      description: "a combinar"
    }
  ]
};

export const paymentData = {
  title: "métodos de pagamento",
  subtitle: "FACILIDADE",
  methods: [
    "cartão de débito/crédito",
    "dinheiro",
    "pix"
  ],
  installmentNote: {
    highlight: "para pedidos acima de R$50,00:",
    text: "parcelamento em até 3x + taxa da maquininha"
  }
};
