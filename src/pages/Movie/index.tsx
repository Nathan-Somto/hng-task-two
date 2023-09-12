import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
// https://api.themoviedb.org/3/movie/:id?api_key=key&append_to_response=videos
export default function Movie() {
  const {id} = useParams();
  return (
    <>
      <Sidebar />
      <main className='md:ml-[230px] mt-12 md:mt-0'>
        <h1 className="text-4xl font-semibold text-gray-700">
          Hi i am a particular Movie with an id of {id}
        </h1>
      </main>
    </>
  );
}
