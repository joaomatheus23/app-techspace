import { Post } from "../models/interfaces/Post";

function Posts({ posts }: { posts: Array<Post> }) {
  return (
    <div className="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {posts.length > 0 &&
          posts.map((post) => (
            <div
              key={crypto.randomUUID()}
              className="rounded overflow-hidden shadow-lg bg-purple-600"
            >
              <div className="relative">
                <img
                  className="w-full"
                  src={post.imageUrl}
                  alt="Imagem do post criado"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                <div className="absolute bottom-0 left-0 bg-orange-500 px-2 py-1 rounded-e-md text-white text-sm hover:bg-white hover:text-purple-600 transition duration-500 ease-in-out">
                  <div className="inline-flex justify-center items-center gap-2 rounded-md m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>

                    <span> {post.author} </span>
                  </div>
                </div>
              </div>

              <div className="px-6 py-2">
                <h6 className="font-bold mb-3 text-lg inline-block hover:text-orange-500 transition duration-500 ease-in-out">
                  {post.title}
                </h6>
                <p className="text-gray-200 text-sm"> {post.content.trim()} </p>
              </div>

              <div className="px-6 py-2 flex flex-row items-center">
                <span className="text-sm font-normal text-gray-300 mr-1 flex flex-row items-center">
                  <span className="font-bold hover:text-orange-500 transition duration-500 ease-in-out">
                    Criação
                  </span>
                  : {post.creationDate}
                </span>
              </div>

              <div className="px-6 mb-1 py-2 flex flex-row items-center">
                <span className="text-sm font-normal text-gray-300 mr-1 flex flex-row items-center">
                  <span className="font-bold hover:text-orange-500 transition duration-500 ease-in-out">
                    Email
                  </span>
                  : {post.userEmail}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Posts;
