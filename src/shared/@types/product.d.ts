declare namespace Product {
  export interface Store {
    productName: string;
    contents: string;
    reqTickets: number;
    notes: string;
    category: string;

    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;

    images: File[];

    setInfo: ({
      productName: string,
      contents: string,
      reqTickets: number,
      notes: string,
      category: string,
    }) => void;

    addImage: (file: File) => void;
    reset: () => void;
  }
}
