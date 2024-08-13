import React  from 'react';
import Image from 'next/image';
import { anton, lato } from '@/app/fonts';
import Link from 'next/link';
import VideoPlayer from '@/components/Projects/VideoPlayer'
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
  if (!data.fields) return null;

  const variant = data.fields.variant;
  const image = data.fields.picture;
  const image2 = data.fields.picture2;
  const title = data.fields.title;
  const text = data.fields.text1;

  const imgPositionClasses = {
    "variant1": "order-1 md:order-2", // Image on the left
    "variant2": "order-1 md:order-2", // Image on the left
    "variant3": "order-1 md:order-1", // Image on the left
    "variant4": "order-1 md:order-1", // Image on the left
  };

  const textPositionClasses = {
    "variant1": "order-2 md:order-1 flex-col", // Text on the right, aligned at the top
    "variant2": "order-2 md:order-1 flex-col-reverse", // Text on the right, centered
    "variant3": "order-2 md:order-2 flex-col", // Text on the right, centered
    "variant4": "order-2 md:order-2 flex-col-reverse", // Text on the right, centered
  };

  return (
    <div className="flex flex-col md:flex-row items-start bg-black text-white gap-6 md:py-8 w-full md:h-[95vh] mx-auto">
      <div className={`md:w-2/6 w-full h-auto md:h-full flex gap-4 ${textPositionClasses[variant]}`}>
        <div>
          <h2 className="text-[14px] md:text-[14px] mb-4 leading-tight opacity-50">
            {title}
          </h2>
          <p className="text-lg md:text-[32px] md:leading-10">
            {text}
          </p>
        </div>
        <div className="relative w-full md:h-full aspect-video md:aspect-auto">
          <Image
            src={yandexCloudImage(image.url)}
            fill={true}
            className="object-cover select-none"
          />
        </div>
      </div>

      <div className={`flex justify-center md:justify-start  md:mb-0 md:w-4/6 md:h-full w-full h-auto ${imgPositionClasses[variant]}`}>
        <div className="relative w-full md:h-full aspect-video md:aspect-auto">
          <Image
            src={yandexCloudImage(image2.url)}
            fill={true}
            className="object-cover select-none"
          />
        </div>
      </div>
    </div>
  );
};

const ImageTextBlock2 = ({ data }) => {
  if (!data.fields) return null;

  const variant = data.fields.variant;
  const image = data.fields.picture;
  const image2 = data.fields.picture2;
  const title = data.fields.title;
  const text = data.fields.text1;

  const imgPositionClasses = {
    "variant1": "order-2 md:order-1", // Image on the left
    "variant2": "order-2 md:order-1", // Image on the left
  };

  const textPositionClasses = {
    "variant1": "order-2 md:order-2 flex-col-reverse", // Text on the right, centered
    "variant2": "order-2 md:order-2 flex-col", // Text on the right, aligned at the top
  };

  return (
    <div className="flex flex-col md:flex-row items-start bg-black text-white gap-6 md:py-8 h-auto md:h-[95vh] w-full mx-auto">
      <div className={`flex justify-center md:justify-start md:mb-0 md:w-2/5 md:h-full w-full ${imgPositionClasses[variant]}`}>
        <div className="relative w-full md:h-full aspect-video md:aspect-auto">
          <Image
            src={yandexCloudImage(image.url)}
            fill={true}
            className="object-cover select-none"
          />
        </div>
      </div>

      <div className={`md:w-3/5 w-full md:h-full h-auto flex gap-4 ${textPositionClasses[variant]}`}>
        <div>
          <h2 className="text-[14px] md:text-[14px] mb-4 leading-tight opacity-50">
            {title}
          </h2>
          <p className="text-lg md:text-[32px] md:leading-10">
            {text}
          </p>
        </div>
        <div className="relative w-full md:h-full aspect-video md:aspect-auto">
          <Image
            src={yandexCloudImage(image2.url)}
            fill={true}
            className="object-cover select-none"
          />
        </div>
      </div>
    </div>
  );
};

const ImageTextBlock = ({ data }) => {
  if (!data.fields) return null;

  const variant = data.fields.variant;
  const image = data.fields.picture;
  const title = data.fields.title;
  const text = data.fields.text1;

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
    <div className="flex flex-col md:flex-row items-start bg-black text-white gap-6 md:py-8 w-full mx-auto">
      <div
        className={`w-full md:w-3/5 flex justify-center md:justify-start mb-8 md:mb-0 aspect-video ${imgPositionClasses[variant]}`}
      >
        <div className="relative w-full h-full">
          <Image
            src={yandexCloudImage(image.url)}
            fill={true}
            className="object-cover select-none"
          />
        </div>
      </div>

      <div className={`w-full md:w-2/5 flex flex-col ${textPositionClasses[variant]}`}>
        <div>
          <h2 className="text-[14px] md:text-[14px] mb-4 leading-tight opacity-50">
            {title}
          </h2>
          <p className="text-lg md:text-[32px] md:leading-10">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

const TextBlock = ({ data }) => {
  if (!data.fields) return null;

  const title = data.fields.title;
  const text = data.fields.text1;

  return (
    <div className="flex flex-col md:flex-col bg-black text-white gap-6 py-8 mx-auto">
      <div className={`w-full md:w-1/2 flex flex-col`}>
        <div>
          <p className="text-[14px] md:text-[14px] mb-4 leading-tight opacity-50">
            {title}
          </p>
          <p className="text-lg md:text-[32px] md:leading-10">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

const TwoImagesBlock = ({ data }) => {
  if (!data.fields) return null;

  const image = data.fields.picture;
  const image2 = data.fields.picture2;

  return (
    <div className="flex flex-row items-start bg-black text-white gap-6 md:py-8 md:h-[100vh] h-[25vh] md:mx-auto">
      <div className={`flex justify-center md:justify-start mb-8 md:mb-0 md:w-1/2 h-full w-full`}>
        <Image
          src={yandexCloudImage(image.url)}
          width={image.width}
          height={image.height}
          className="object-cover w-auto h-full max-h-full"
        />
      </div>
      <div className={`flex justify-center md:justify-start mb-8 md:mb-0 md:w-1/2 h-full w-full`}>
        <Image
          src={yandexCloudImage(image2.url)}
          width={image2.width}
          height={image2.height}
          className="object-cover w-auto h-full max-h-full"
        />
      </div>
    </div>
  );
};

const OneImageBlock = ({ data }) => {
  if (!data.fields) return null;

  const image = data.fields.picture;

  return (
    <div className="flex flex-col md:flex-row items-start bg-black mb-8 text-white gap-6 w-full md:h-[100vh] mx-auto">
      <div className="relative w-full h-auto aspect-video">
        <Image
          src={yandexCloudImage(image.url)}
          fill={true}
          className="object-cover select-none"
        />
      </div>
    </div>
  );
};



const OneVideoBlock = ({ data }) => {
  if (!data.fields) return null;

  const video = data.fields.video;
    console.log(video)


  return (
    <div className="md:h-[100vh] w-autorelative overflow-hidden mb-8">
        <VideoPlayer url={yandexCloudImage(video.url)}/>
      </div>
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
    case 'OneVideo':
      return <OneVideoBlock data={data} key={data.fields.id} />;
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
