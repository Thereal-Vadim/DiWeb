import { Project, ClientCategory } from './types';

export const MANIFESTO_TEXT = "I specialize in the art of the portrait. In the quiet of the studio, I seek the raw, unfiltered essence of the individual. Photography is a personal dialogue. A study of character, form, and the subtle language of light.";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "VOID RUNNER",
    category: "Editorial",
    year: "2024",
    imageUrl: "https://picsum.photos/800/1200?random=1",
    widthClass: "md:col-span-1"
  },
  {
    id: 2,
    title: "CHROME HEARTS",
    category: "Campaign",
    year: "2023",
    imageUrl: "https://picsum.photos/1200/800?random=2",
    widthClass: "md:col-span-2"
  },
  {
    id: 3,
    title: "SILENT NOISE",
    category: "Portrait",
    year: "2024",
    imageUrl: "https://picsum.photos/800/1000?random=3",
    widthClass: "md:col-span-1"
  },
  {
    id: 4,
    title: "URBAN DECAY",
    category: "Fashion",
    year: "2023",
    imageUrl: "https://picsum.photos/900/1300?random=4",
    widthClass: "md:col-span-1"
  },
  {
    id: 5,
    title: "ABSTRACT FORMS",
    category: "Art Direction",
    year: "2024",
    imageUrl: "https://picsum.photos/1000/1000?random=5",
    widthClass: "md:col-span-1"
  },
  {
    id: 6,
    title: "NIGHT WALKERS",
    category: "Editorial",
    year: "2022",
    imageUrl: "https://picsum.photos/1400/900?random=6",
    widthClass: "md:col-span-2"
  }
];

export const CLIENTS: ClientCategory[] = [
  {
    title: "Publications",
    clients: ["VOGUE ITALIA", "HARPER'S BAZAAR", "DAZED", "I-D MAGAZINE", "NUMÉRO", "WALLPAPER*", "KINFOLK"]
  },
  {
    title: "Fashion Houses",
    clients: ["SAINT LAURENT", "BALENCIAGA", "ACNE STUDIOS", "Rick Owens", "Yohji Yamamoto", "COMME des GARÇONS"]
  },
  {
    title: "Commercial",
    clients: ["SSENSE", "FARFETCH", "MYTHERESA", "DOVER STREET MARKET", "GRAILED"]
  }
];