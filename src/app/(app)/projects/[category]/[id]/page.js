import React  from 'react';
import Image from 'next/image';
import { anton, lato } from '@/app/fonts';
import Link from 'next/link';
import VideoPlayer from '@/components/Projects/VideoPlayer'
import ReactPlayer from 'react-player'
import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';

const payload = await getPayloadHMR({ config });



const allProjects = [
  {
    id: 1,
    title: "ALTERNATIVA FILM PROJECT BY INDRIVE",
    category: "production",
    image: "/project1.png",
    video: "https://vimeo.com/914864510" // Replace with your Vimeo video URL
  },
  {
    id: 2,
    title: "OPPO RENO11 SERIES",
    category: "communication",
    image: "/project2.png",
    video: "https://www.youtube.com/watch?v=co4UH24h8YY"
  },
  {
    id: 3,
    title: "KONTRAK - LIEBE IST EIN DIEB",
    category: "production",
    image: "/project3.png",
    video: "https://vimeo.com/914864510"
  },
];


const ImageTextBlock3 = ({ data }) => {
  if(!data.fields)
    return null

  const variant = data.fields.variant
  const imageUrl = data.fields.picture.url
  const image2Url = data.fields.picture2.url
  const title = data.fields.title
  const text = data.fields.text1



  const imgPositionClasses = {
    "variant1": "order-2 md:order-2", // Image on the left
    "variant2": "order-2 md:order-2", // Image on the left
    "variant3": "order-1 md:order-1", // Image on the left
    "variant4": "order-1 md:order-1", // Image on the left
  };

  const textPositionClasses = {
    "variant1": "order-1 md:order-1 flex-col", // Text on the right, aligned at the top
    "variant2": "order-1 md:order-1 flex-col-reverse", // Text on the right, centered
    "variant3": "order-2 md:order-2 flex-col", // Text on the right, centered
    "variant4": "order-2 md:order-2 flex-col-reverse", // Text on the right, centered
  };

  return (
    <div className="flex flex-col md:flex-row items-start bg-black text-white gap-6 py-8 w-full h-[95vh] mx-auto">
      <div className={`w-2/6 h-full flex gap-4  ${textPositionClasses[variant]}`}>
        <div>
          <h2 className="text-[14px] md:text-[14px] mb-4 leading-tight opacity-50">
            {title}
          </h2>
          <p className="text-lg md:text-[32px] leading-10">
            {text}
          </p>
        </div>
        <img
          src={yandexCloudImage(imageUrl)}
          className="object-cover w-full h-full "
        />
      </div>

      <div className={` flex justify-center md:justify-start mb-8 md:mb-0 w-4/6 h-full ${imgPositionClasses[variant]}`} >
        <img
          src={yandexCloudImage(image2Url)}
          className="object-cover w-full h-full"
        />
      </div>

    </div>
  );
};


const ImageTextBlock2 = ({ data }) => {
  if(!data.fields)
    return null

  const variant = data.fields.variant
  const imageUrl = data.fields.picture.url
  const image2Url = data.fields.picture2.url
  const title = data.fields.title
  const text = data.fields.text1

  // Define dynamic classes based on the variant
  const imgPositionClasses = {
    "variant1": "order-1 md:order-1", // Image on the left
    "variant2": "order-1 md:order-1", // Image on the left
  };

  const textPositionClasses = {
    "variant1": "order-2 md:order-2 flex-col-reverse", // Text on the right, centered
    "variant2": "order-2 md:order-2 flex-col", // Text on the right, aligned at the top
  };

  return (
    <div className="flex flex-col md:flex-row items-start bg-black text-white gap-6 py-8 h-[95vh] mx-auto">
      <div className={` flex justify-center md:justify-start mb-8 md:mb-0 w-2/5 h-full ${imgPositionClasses[variant]}`} >
        <img
          src={yandexCloudImage(imageUrl)}
          className="object-cover w-auto h-full max-h-full"
        />
      </div>

      <div className={`w-3/5 h-full flex gap-4  ${textPositionClasses[variant]}`}>
        <div>
          <h2 className="text-[14px] md:text-[14px] mb-4 leading-tight opacity-50">
            {title}
          </h2>
          <p className="text-lg md:text-[32px] leading-10">
            {text}
          </p>
        </div>
        <img
          src={yandexCloudImage(image2Url)}
          className="object-cover w-auto h-full "
        />
      </div>
    </div>
  );
};


const ImageTextBlock = ({ data }) => {
  // Define dynamic classes based on the variant
  if(!data.fields)
    return null
  console.log('in imagetextblock', data)

  const variant = data.fields.variant
  const imageUrl = data.fields.picture.url
  const title = data.fields.title
  const text = data.fields.text1

  const imgPositionClasses = {
    "variant1": "order-1 md:order-1", // Image on the left
    "variant2": "order-1 md:order-1", // Image on the left
    "variant3": "order-2 md:order-2", // Image on the right
    "variant4": "order-2 md:order-2", // Image on the right
  };

  const textPositionClasses = {
    "variant1": "order-2 md:order-2 self-start", // Text on the right, aligned at the top
    "variant2": "order-2 md:order-2 self-end", // Text on the right, centered
    "variant3": "order-1 md:order-1 self-start", // Text on the left, aligned at the bottom
    "variant4": "order-1 md:order-1 self-end", // Text on the left, centered
  };

  return (
    <div className="flex flex-col md:flex-row items-start bg-black text-white gap-6 py-8 mx-auto">
      <div
        className={`w-full md:w-3/5 flex justify-center md:justify-start mb-8 md:mb-0 aspect-video ${imgPositionClasses[variant]}`}
      >
        <img
          src={yandexCloudImage(imageUrl)}
          className="object-cover w-full h-full"
        />
      </div>

      <div className={`w-full md:w-2/5 flex flex-col ${textPositionClasses[variant]}`}>
        <div >
          <h2 className="text-[14px] md:text-[14px] mb-4 leading-tight opacity-50">
            {title}
          </h2>
          <p className="text-lg md:text-[32px] leading-10">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

const TextBlock = ({ data }) => {
  if(!data.fields)
    return null

  const title = data.fields.title
  const text = data.fields.text1

  return (
    <div className="flex flex-col md:flex-col  bg-black text-white gap-6 py-8 mx-auto">
      <div className={`w-full md:w-1/2 flex flex-col `}>
        <div >
          <p className="text-[14px] md:text-[14px] mb-4 leading-tight opacity-50">
            {title}
          </p>
          <p className="text-lg md:text-[32px] leading-10">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};


const TwoImagesBlock = ({ data }) => {
    if(!data.fields)
    return null
  console.log(data)

  const imageUrl = data.fields.picture.url
  const image2Url = data.fields.picture2.url

  return (
    <div className="flex flex-col md:flex-row items-start bg-black text-white gap-6 py-8 h-[100vh] mx-auto">
      <div className={` flex justify-center md:justify-start mb-8 md:mb-0 w-1/2 h-full`} >
        <img
          src={yandexCloudImage(imageUrl)}
          className="object-cover w-auto h-full max-h-full"
        />
      </div>
      <div className={` flex justify-center md:justify-start mb-8 md:mb-0 w-1/2 h-full`} >
        <img
          src={yandexCloudImage(image2Url)}
          className="object-cover w-auto h-full max-h-full"
        />
      </div>

    </div>
  );
};

const OneImageBlock = ({ data }) => {
  if(!data.fields)
    return null

  const image = data.fields.picture
  return (
    <div className="flex flex-col md:flex-row items-start bg-black text-white gap-6 w-full h-[100vh] mx-auto">
        <Image
          src={yandexCloudImage(image.url)}
          width={image.width}
          height={image.height}
          className="object-cover w-full h-full "
        />

    </div>
  );
};


const AwardComponent7 = ({video}) => {
  return (
      <div className="h-[100vh] w-autorelative overflow-hidden mb-8">
    <VideoPlayer url="https://vimeo.com/91486451" />
      </div>
    // <div className="flex flex-col md:flex-row items-start bg-black text-white gap-6 w-full h-[100vh] mx-auto">
    //     <img
    //       src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Satyam_first_building.JPG"
    //       className="object-cover w-full h-full "
    //     />

    // </div>
  );
};

const renderBlock = (data) => {
  if (!data.fields) {
    return null;
  }

  switch (data.fields.blockType) {
    case 'ImageText':
      return <ImageTextBlock data={data} key={data.fields.id} />;
    case 'ImageText2':
      return <ImageTextBlock2 data={data} key={data.fields.id} />;
    case 'ImageText3':
      return <ImageTextBlock3 data={data} key={data.fields.id} />;
    case 'Text':
      return <TextBlock data={data} key={data.fields.id} />;
    case 'TwoImages':
      return <TwoImagesBlock data={data} key={data.fields.id} />;
    case 'OneImage':
      return <OneImageBlock data={data} key={data.fields.id} />;
    default:
      return null; // or some fallback UI
  }
};

const yandexCloudImage = (imageUrl) => {
  const filename = imageUrl.split('/').pop();
  return `${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${filename}`;
};


export default async function ProjectPage({ params }) {
  const { id } = params;
  const project = allProjects.find((project) => project.id === parseInt(id));

  const result = await payload.findByID({
      collection: 'projects', // required
      id: id.toString(), // required
      depth: 5,
  })
  const blocks = result.content.root.children;

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className={`p-6 bg-black text-white ${lato.className}`}>
      <Link href="/projects" className="text-lg text-white mb-8 inline-block">
        &lt; BACK
      </Link>
      {/* <div className="h-[70vh] w-autorelative overflow-hidden mb-8"> */}
      {/*    <VideoPlayer url={project.video} /> */}
      {/* </div> */}
      {/* <h1 className={`text-4xl font-bold text-white mb-2 ${anton.className}`}> */}
      {/*   {project.title} */}
      {/* </h1> */}
      {/* <h2 className="text-lg text-red-600 mb-4 uppercase">{project.category}</h2> */}
      {/* <div className="text-sm text-white space-y-1 uppercase"> */}
      {/*   <p>DIRECTED BY: ZHANDOS QAHAR</p> */}
      {/*   <p>DOP: YERKEBULAN KUANYSHBAYEV</p> */}
      {/*   <p>1AD: YEVGENIYA MOREVA</p> */}
      {/*   <p>EXECUTIVE PRODUCER: YERKEBULAN KURISHBAYEV</p> */}
      {/*   <p>LINE PRODUCER: KAMILLA AZHIBAYEVA</p> */}
      {/*   <p>PRODUCER ASSISTANT: MADINA TORGAYEVA</p> */}
      {/*   <p>UPM: DMITRIY KASTORSKIY</p> */}
      {/* </div> */}
      <div className="flex flex-col gap-16">
        {blocks.map(block => renderBlock(block))}
      </div>
      {/* <ImageTextBlock variant="variant4"/> */}
      {/* <ImageTextBlock2 variant="variant1"/> */}
      {/* <ImageTextBlock3 variant="variant4"/> */}
      {/* <TextBlock/> */}
      {/* <TwoImagesBlock/> */}
      {/* <OneImageBlock/> */}
    </div>
  );
}
