export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Sarvajit's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Sarvajit's Blog! This blog was created by me
              as a personal project to share my thoughts and ideas. 
            </p>

            <p>
              On this blog, you'll find  articles and tutorials on topics
              of Artificial Intelligence or whatever I am curious about. I is always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>

            <p>
              I encourage you to leave comments on my posts and engage. You can like other people's comments and reply to
              them as well. I believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}