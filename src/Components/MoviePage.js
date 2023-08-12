import { useParams, useNavigate } from "react-router"
import { useGetMovieByCategoryQuery } from "../Feature/movieApi";
import { imagePath } from "../Feature/constant";

const MoviePage = () => {
  const { category, page } = useParams();
  const nav = useNavigate();

  const { isLoading, data } = useGetMovieByCategoryQuery({ path: category, page });
  if (isLoading) {
    return <div className="w-72 mx-auto mt-32">
      <lottie-player src="https://lottie.host/c5b9368e-3710-457b-8dd2-e01bc3703b3a/pCPuWu2WG4.json" background="#ffffff" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
    </div>
  }
  console.log(data)

  return (
    <>
      <div className="grid grid-cols-4 gap-8 p-5 ">
        {data && data.results.map((movie) => {
          return <div key={movie.id} className="shadow-lg shadow-gray-600 rounded-lg ">
            <img src={`${imagePath}${movie.poster_path}`} alt='barbie poster' className="rounded-tr-lg rounded-tl-lg cursor-pointer" />
            <div className="p-2 space-y-1">
              <p className="text-lg font-bold text-black">{movie.title}
              </p>
              <p className="">Description: {movie.overview.substring(0, 100) + '.....'}</p>
            </div>


          </div>

        })
        }

      </div >
      <div className="flex gap-10 mx-auto w-full items-center mb-10 p-5 justify-center">
        {data?.page !== 1 && <button className="bg-blue-800 text-white px-4 py-2 rounded-2xl font-bold">Prv</button>}<p>{data?.page}</p><button onClick={() => nav(`/moviepage/${category}/${data?.page + 1}`)} className="bg-blue-800 text-white px-4 py-2 rounded-2xl font-bold">Next</button>
      </div>

    </>
  )
}
export default MoviePage