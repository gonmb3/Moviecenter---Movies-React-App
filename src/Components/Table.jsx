import { FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GoEye } from "react-icons/go";
import { Link } from "react-router-dom";

// styles
const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-xs text-left leading-6 whitespace-nowrap px-5 p-4";

const Table = ({ data, admin }) => {
  // tr Rows component for Table component
  const Rows = ({ movie, index, admin }) => {
    return (
      <tr key={index}>
        <td className={`${Text}`}>
          <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden text-white">
            {/* movie image */}
            <img
              src={`/images/movies/${movie.titleImage}`}
              alt={movie?.name}
              className="h-full w-full  object-cover "
            />
          </div>
        </td>
      {/* movie name */}
        <td className={`${Text} truncate`}>{movie?.name}</td>
            {/* movie category */}
        <td className={`${Text}`}>{movie?.category}</td>
            {/* movie lenguage */}
        <td className={`${Text}`}>{movie?.lenguage}</td>
            {/* movie year */}
        <td className={`${Text}`}>{movie?.year}</td>
            {/* movie duration */}
        <td className={`${Text}`}>{movie?.time}</td>

        <td className={`${Text} float-right flex-rows gap-2`}>
          {/* if user === true ? */}
          {admin ? (
            <>
              <button className="border border-border bg-dry flex-rows gap-2 text-border roudned py-1 px-2">
                Editar <FaEdit className="text-green-500" />
              </button>
  
              <button className="bg-subMain text-white rounded  flex-colo w-7 h-7 ">
                <MdDelete size={20} />
              </button>
            </>
          ) : (         
            <>
              {/* else */}

                  {/* download button */}
              <button className="border border-border bg-dry flex-rows gap-2 text-border roudned py-1 px-2">
                Descargar <FaCloudDownloadAlt size={20} className="text-green-500" />
              </button>
  
              <Link
                to={`/pelicula/${movie?.name}`}
                className="bg-subMain text-white rounded  flex-colo w-7 h-7 "
              >
                  {/* see movie ( eye icon )*/}
                <GoEye size={20} />
              </Link>
            </>
          )}
        </td>
      </tr>
    );
  };

  return (
    <div className="overlow-x-scroll overflow-hidden realtive w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            <th className={`${Head}`} scope="col">
              Imagen
            </th>
            <th className={`${Head}`} scope="col">
              Nombre
            </th>
            <th className={`${Head}`} scope="col">
              Categoria
            </th>
            <th className={`${Head}`} scope="col">
              Lenguaje
            </th>
            <th className={`${Head}`} scope="col">
              Año
            </th>
            <th className={`${Head}`} scope="col">
              Duración
            </th>
            <th className={`${Head} text-end`} scope="col">
              Acciones
            </th>
          </tr>
        </thead>

        <tbody className="bg-main divide-y divide-gray-800">
          {data.slice(0,5).map((movie, index) => (
            <Rows movie={movie} key={index} admin={admin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
