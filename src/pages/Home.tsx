import QuestionForm from "../components/QuestionForm";
import QuestionList from "../components/QuestionList";

const Home = () => {
  const [reload, setReload] = useState(false);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <QuestionForm onAdd={() => setReload(!reload)} />
      <QuestionList key={reload ? "1" : "0"} />
    </div>
  );
};

export default Home;