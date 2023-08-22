import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();
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

  const favoritePosts = listBlogs[Math.floor(Math.random() * listBlogs.length)];

  return (
    <div className="min-h-[844px]">
      <div className="container mx-auto pb-[95px] mt-[94px]">
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-[#FFFF00] text-black">
            <div className="h-[300px] bg-gray-300">
              <img
                className="w-full h-full"
                src={require(`../assets/${favoritePosts['image'] ?? 'pexels-4.jpg'}`)}
                alt="unsplash-working"
              />
            </div>
            <div className="px-10 py-2">
              <h3 className="text-[32px] font-bold mb-2 cursor-pointer" onClick={() => navigate(favoritePosts.slug)}>{favoritePosts.title}</h3>
              <p className="mb-2 text-[16px]">{favoritePosts.content}</p>
              <div>
                <span className="mr-3">{favoritePosts.author}</span>
                <span>{favoritePosts.createdAt}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[20px] font-bold">Featured Posts</h3>
            <div className="h-[3px] w-full bg-[#FFFF00] mt-3"></div>
            <div>
              {
                listBlogs.map((data:any) => {
                  return (
                    <div className="my-2">
                      <h4 className="text-[20px] font-bold mb-2 cursor-pointer" onClick={() => navigate(data.slug)}>{data.title}</h4>
                      <div className="flex justify-between">
                        <div>{data.author}</div>
                        <div>{data.createdAt}</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFF00]">
        <div className="container mx-auto py-5">
          <div className="grid grid-cols-4 gap-5">
            {
              listBlogs.map((data:any) => {
                return (
                  <div className="text-black cursor-pointer" onClick={() => navigate(data.slug)}>
                    <div className="h-[150px] w-full bg-gray-300">
                    <img
                      className="w-full h-full"
                      src={require(`../assets/${data.image ?? 'pexels-4.jpg'}`)}
                      alt="unsplash-working"
                    />
                    </div>
                    <h3 className="my-2 font-bold">{data.title}</h3>
                    <div className="my-2">{data.author}</div>
                    <div>{data.createdAt}</div>
                  </div>
                )
              })
            }
          </div>
          <div className="flex justify-center mt-10">
            <button
              className="text-black text-[20px] leading-[30px] tracking-[-0.015em] font-medium py-[5px] px-[20px] transition ease-in-out rounded-full border-2 border-black hover:border-[#FFFF00] hover:text-black hover:bg-[#FFFF00] hover:duration-700"
            >
              See More
            </button>
          </div>
        </div>
      </div>
      <svg width="100%" height="100" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path width="20" d="M720.5 100L0 0H1440L720.5 100Z" fill="#FFFF00"/>
      </svg>
    </div>
  )
};

export default BlogPage;