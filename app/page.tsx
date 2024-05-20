import Image from 'next/image';
import Table from '../components/Table/Table';
import { tableData } from '../data/data';

export default function Home() {
  return (
    <>
      <h1 className="text-2xl my-9">Product Finder</h1>
      <Table tableData={tableData} />
    </>
  );
}
