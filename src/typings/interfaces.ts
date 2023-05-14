export interface ICom {
  id?: number;
  author: string;
  text: string;
}

export interface ITicket {
  stage: string;
  title: string;
  desc?: string;
  tags?: string[];
  comments?: ICom[];
}

export interface IEditingTicket {
  id: string;
  stage: string;
  title: string;
  desc?: string;
  tags?: string[];
  comments?: ICom[];
}

export interface IFilter {
  title: string;
  checked: boolean;
}

export interface IInitialValue {
  tasks: Record<number, ITicket>;
  editingTask: ITicket;
  filters: {
    com: IFilter;
    desc: IFilter;
    tag: IFilter;
  };
}
