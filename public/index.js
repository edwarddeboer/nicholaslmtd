
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <section className="text-center py-12">
        <img 
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&w=320&h=320" 
          alt="Nicholas Barrett" 
          className="mx-auto rounded-full w-32 h-32 object-cover mb-4 shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-4">Nicholas Barrett</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Registered Investment Advisor | Specializing in Cryptocurrency and Digital Asset Guidance
        </p>
      </section>
      ...
      <section className="py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p>Address: 4225 North Central Avenue, Suite 500, Phoenix, AZ 85012</p>
        <p>Phone: (701) 518-4342</p>
        <p>Website: www.NicholasAdvisoryGroup.com</p>
        <p className="mt-4">Please reach out to schedule a consultation or to request more information, including registration documentation.</p>
      </section>
    </main>
  );
}
