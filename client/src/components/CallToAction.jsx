import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row p-6 border border-teal-500 justify-between items-center rounded-tl-3xl rounded-br-3xl text-center shadow-lg space-y-6 sm:space-y-0 sm:space-x-6">
      <div className="flex-1 justify-center flex flex-col space-y-4">
        <h2 className="text-2xl font-semibold">Follow me on Instagram! 😺</h2>
        <p className="text-gray-600 my-2 text-base">
          I share regular poetry and interesting posts. Stay connected for more updates!
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none px-4 py-2 text-sm"
        >
          <a
            href="https://www.instagram.com/ritikroushan_55"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            Visit My Instagram Account
          </a>
        </Button>
      </div>
      <div className="p-4 flex-1">
        <img
          src="https://images.pexels.com/photos/29799602/pexels-photo-29799602.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          className="h-auto w-full object-contain rounded-lg shadow-md"
          alt="Example"
        />
      </div>
    </div>
  );
}






//
// import { Button } from 'flowbite-react';

// export default function CallToAction() {
//   return (
//     <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
//         <div className="flex-1 justify-center flex flex-col">
//             <h2 className='text-2xl'>
//             Follow me on Instagram! 😺
//             </h2>
//             <p className='text-gray-500 my-2'>
//             I share regular poetry and interesting posts. Stay connected for more updates!
//             </p>
//             <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
//                 <a href="https://www.instagram.com/ritikroushan_55" target='_blank' rel='noopener noreferrer'>
//                 Visit My Instagram Account
//                 </a>
//             </Button>
//         </div>
//         <div className="p-7 flex-1">
//             <img src="https://images.pexels.com/photos/29799602/pexels-photo-29799602.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
//         </div>
//     </div>
//   )
// }