import { useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const { slug } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listBlogs, setListBlogs] = useState<any>([
    {
      title: "Getting the Most Out of Video Editing: Tips and Tricks",
      content: "Video editing is a critical stage in the production of visual content that can help increase the quality and appeal of your videos. By mastering the right editing techniques, you can produce videos that are more attractive, professional and have a strong impact on your audience.",
      author: "Nakisha Alfadda",
      createdAt: "07/10/2022",
      slug: "getting-the-most-out-of-video-editing-tips-and-tricks",
      image: "pexels-1.jpg",
    },
    {
      title: "The Art of Photography as a Leading Medium of Personal Expression",
      content: "Video editing is a critical stage in the production of visual content that can help increase the quality and appeal of your videos. By mastering the right editing techniques, you can produce videos that are more attractive, professional and have a strong impact on your audience.",
      author: "Thoriq Aziz",
      createdAt: "08/10/2022",
      slug: "the-art-of-photography-as-a-leading-medium-of-personal-expression",
      image: "pexels-2.jpg",
    },
    {
      title: "Audio Post Production Strategy: Creating Great Sound Quality",
      content: "Video editing is a critical stage in the production of visual content that can help increase the quality and appeal of your videos. By mastering the right editing techniques, you can produce videos that are more attractive, professional and have a strong impact on your audience.",
      author: "Thoriq Aziz",
      createdAt: "09/10/2022",
      slug: "audio-post-production-strategy-creating-great-sound-quality",
      image: "pexels-3.jpg",
    },
    {
      title: "Managing Post Production Projects Efficiently: Tips for Creative Teams",
      content: "Video editing is a critical stage in the production of visual content that can help increase the quality and appeal of your videos. By mastering the right editing techniques, you can produce videos that are more attractive, professional and have a strong impact on your audience.",
      author: "Thoriq Aziz",
      createdAt: "09/10/2022",
      slug: "managing-post-production-projects-efficiently-tips-for-creative-teams",
      image: "pexels-4.jpg",
    },
  ]);

  const detailPost = listBlogs.find((el:any) => el.slug === slug);

  const relatedPostOne = listBlogs[Math.floor(Math.random() * listBlogs.length)];
  const relatedPostTwo = listBlogs[Math.floor(Math.random() * listBlogs.length)]; 

  return (
    <div className="min-h-[844px] mt-[94px]">
      <div className="bg-[#FFFF00] text-black">
        <div className="grid grid-cols-2">
          <div className="px-[50px] py-[30px]">
            <h1 className="text-[50px] font-semibold mb-3">
              {detailPost.title}
            </h1>
            <p className="mb-10">
              Video editing is a critical stage in the production of visual
              content that can help increase the quality and appeal of your
              videos. By mastering the right editing techniques, you can produce
              videos that are more attractive, professional and have a strong
              impact on your audience.
            </p>
            <span className="mr-10">{detailPost.author}</span>
            <span>{detailPost.createdAt}</span>
          </div>
          <div className="h-full bg-gray-300">
            <img
              className="w-full max-h-[500px] h-full"
              src={require(`../assets/${detailPost.image ?? 'pexels-4.jpg'}`)}
              alt="unsplash-working"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-[50px] py-[50px]">
        <p>
          Video editing is a critical stage in the production of visual content
          that can help increase the quality and appeal of your videos. By
          mastering the right editing techniques, you can produce videos that
          are more attractive, professional and have a strong impact on your
          audience. The following are some tips and tricks to get the most out
          of your video editing: <br /><br /><br /> 1. Understand the Purpose of Your Video: Before<br /><br />
          you start editing, explain the purpose of your video. Do you want to
          convey a special message, entertain or educate your audience?
          Understanding these goals will help you make appropriate editing
          decisions. <br /><br /><br />2. Choice of Editing Software:<br /><br /> Choose a video editing
          software that fits your skill level and project needs. Adobe Premiere
          Pro, Final Cut Pro, iMovie, and DaVinci Resolve are some of the
          popular options you can consider.<br /><br /><br /> 3. Plan the Storyline:<br /><br /> Before you
          start the editing process, make a plan for the storyline of your
          video. The setting of the scenes, the order of the shots, and the
          duration of the clips must be carefully thought out to create a
          seamless narrative.<br /><br /><br /> 4. Best Footage Selection:<br /><br /> Choose the best and
          most relevant clip to tell your story. Reducing less important clips
          can make videos more compact and interesting.<br /><br /><br /> 5. Use Proper Cutting
          Techniques:<br /><br /> Cutting is the basis of video editing. Make sure
          transitions between clips, such as hard cuts or slow changes, match
          the feel of your video.<br /><br /><br /> 6. Color Adjustment and Correction:<br /><br /> Adjusting
          color and correction is an important step to provide a consistent
          visual feel. You can use the color grading feature in the editing
          software to achieve the desired look.<br /><br /><br /> 7. Careful Audio Editing:<br /><br /> Sound
          is an important factor in the viewing experience. Make sure the audio
          clip is clear, not too loud, and matches the mood of the video.<br /><br /><br /> 8.
          Efek Visual dan Transisi:<br /><br /> Tambahkan efek visual atau transisi yang
          sesuai dengan gaya video Anda. Namun, jangan berlebihan, dan pastikan
          efek tersebut memperkuat pesan yang ingin Anda sampaikan.
        </p>
      </div>
      <div className="bg-[#FFFF00] text-black">
        <div className="container mx-auto">
          <h3 className="text-center text-[50px] font-semibold pt-[20px] my-[20px]">Related Blogs</h3>
          <div className="flex gap-5 justify-center mt-4">
            <div className="text-black max-w-[305px]">
              <div className="h-[150px] w-full bg-gray-300">
                <img
                  className="w-full h-full"
                  src={require(`../assets/${relatedPostOne.image ?? 'pexels-4.jpg'}`)}
                  alt="unsplash-working"
                />
              </div>
              <h3 className="my-2 font-bold">{relatedPostOne.title}</h3>
              <div className="my-2">{relatedPostOne.author}</div>
              <div>{relatedPostOne.createdAt}</div>
            </div>
            <div className="text-black max-w-[305px]">
              <div className="h-[150px] w-full bg-gray-300">
                <img
                  className="w-full h-full"
                  src={require(`../assets/${relatedPostTwo.image ?? 'pexels-4.jpg'}`)}
                  alt="unsplash-working"
                />
              </div>
              <h3 className="my-2 font-bold">{relatedPostTwo.title}</h3>
              <div className="my-2">{relatedPostTwo.author}</div>
              <div>{relatedPostTwo.createdAt}</div>
            </div>
          </div>
        </div>
      </div>
      <svg width="100%" height="100" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path width="20" d="M720.5 100L0 0H1440L720.5 100Z" fill="#FFFF00"/>
      </svg>
    </div>
  );
};

export default BlogDetailPage;
