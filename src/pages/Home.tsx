export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Flutter Portfolio
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A showcase of Flutter development projects and skills
        </p>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">About Me</h2>
            <p className="text-gray-600">
              Flutter developer passionate about creating beautiful and functional mobile applications.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Flutter</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Dart</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Firebase</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">React</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}