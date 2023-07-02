
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi';

// drag and drop
const Uploder = () => {
  const {getRootProps, getInputProps} = useDropzone({
    multiple:false,
    maxSize: 100000,
    onDrop: (acceptedFiler) => {
      alert(acceptedFiler[0].name)
    }
  });

  return (
    // drag and drop container
    <div className='w-full text-center'>  
        <div 
        {...getRootProps()}
        className="px-6 py-6 border-2 border-border border-dashed bg-main rounded-md cursor-pointer"
        >
              <input {...getInputProps()} />
              <span className='mx-auto flex-colo text-subMain  text-3xl'>
                <FiUpload />
              </span>
              <p className='text-sm mt-2'>Arrastra tu imagen hasta aquí</p>
              <em className='text-xs text-border'>
                (solo formatos .jpg y .png son aceptados)
              </em>
        </div>
    </div>
  )
}

export default Uploder