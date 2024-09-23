declare namespace Product {
  export interface Store {
    productName: string;
    contents: string;
    reqTickets: number;
    notes: string;
    category: string;

    launchedDate: string | null; //0000-00-00

    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;

    images: File[];

    setInfo: (
      productName: string,
      contents: string,
      reqTickets: number,
      notes: string,
      category: string,
      launchedDate?: string | null
    ) => void;

    addImage: (file: File) => void;
    reset: () => void;
  }
}
