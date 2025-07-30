import Header from '../components/Header';
import ResultTable from '../components/ResultTable';

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">Interview Results</h2>
        <ResultTable />
      </div>
    </div>
  );
}
