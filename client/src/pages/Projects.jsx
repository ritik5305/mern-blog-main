// import CallToAction from '../components/CallToAction';

// export default function Projects() {
//   return (
//     <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
//       <h1 className='text-3xl font-semibold'>My Social media</h1>
//       <p className='text-md text-gray-500'>Hello friends, go to all social media and follow me, I stay updated and upload posts!</p>
//       {/* CallToAction ka wrapper with height adjustment */}
//       <div className="w-full h-24 flex justify-center items-center">
//         <CallToAction />
//       </div>
//     </div>
//   );
// }

import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>My Social Midea</h1>
      <p className='text-md text-gray-500'>Hello friends, go to all social media and follow me, I stay updated and upload posts!</p>
      <CallToAction />
    </div>
  )
}