import Image from 'next/image';
import Table from '../components/Table/Table';
import { tableData } from '../data/data';

export default function Home() {
  return (
    <div>
      <Table tableData={tableData} />
    </div>
  );
}
