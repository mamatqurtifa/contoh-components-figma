import Image from 'next/image';

export default function DesignSystem() {
  // Current date and user info
  const currentDateTime = "2025-08-02 02:37:46";
  const currentUser = "mamatqurtifa";

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-blue-dark mb-2 font-['Alexandria']">Design System</h1>
          <div className="flex items-center text-sm text-gray-500">
            <span>Last updated: {currentDateTime}</span>
            <span className="mx-2">•</span>
            <span>User: {currentUser}</span>
          </div>
        </div>

        {/* Colors */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-dark mb-6 font-['Alexandria'] border-b pb-2">Colors</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <div className="h-24 bg-blue rounded-2xl shadow-md"></div>
              <div className="mt-2">
                <p className="font-medium">Blue</p>
                <p className="text-sm text-gray-500">#0055b8</p>
              </div>
            </div>
            
            <div>
              <div className="h-24 bg-blue-dark rounded-2xl shadow-md"></div>
              <div className="mt-2">
                <p className="font-medium">Blue Dark</p>
                <p className="text-sm text-gray-500">#003b80</p>
              </div>
            </div>
            
            <div>
              <div className="h-24 bg-white rounded-2xl shadow-md border"></div>
              <div className="mt-2">
                <p className="font-medium">White</p>
                <p className="text-sm text-gray-500">#ffffff</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-dark mb-6 font-['Alexandria'] border-b pb-2">Typography</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-blue-dark mb-4 font-['Alexandria']">Alexandria</h3>
              <div className="space-y-3">
                <p className="font-light text-2xl font-['Alexandria']">Light</p>
                <p className="font-normal text-2xl font-['Alexandria']">Regular</p>
                <p className="font-medium text-2xl font-['Alexandria']">Medium</p>
                <p className="font-semibold text-2xl font-['Alexandria']">SemiBold</p>
                <p className="font-bold text-2xl font-['Alexandria']">Bold</p>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-blue-dark mb-4 font-['Alexandria']">Poppins</h3>
              <div className="space-y-3">
                <p className="font-light text-2xl">Light</p>
                <p className="font-normal text-2xl">Regular</p>
                <p className="font-medium text-2xl">Medium</p>
                <p className="font-semibold text-2xl">SemiBold</p>
                <p className="font-bold text-2xl">Bold</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 gap-4">
            <div className="card">
              <h1 className="text-4xl font-bold font-['Alexandria'] text-blue-dark">Heading 1</h1>
            </div>
            <div className="card">
              <h2 className="text-3xl font-bold font-['Alexandria'] text-blue-dark">Heading 2</h2>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold font-['Alexandria'] text-blue-dark">Heading 3</h3>
            </div>
            <div className="card">
              <h4 className="text-xl font-bold font-['Alexandria'] text-blue-dark">Heading 4</h4>
            </div>
            <div className="card">
              <p className="text-base">Body Text</p>
            </div>
            <div className="card">
              <p className="text-sm text-gray-600">Small Text</p>
            </div>
          </div>
        </section>
        
        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-dark mb-6 font-['Alexandria'] border-b pb-2">Buttons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card flex flex-wrap gap-4">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-outline">Outline Button</button>
              <button className="btn-white bg-blue text-white">White Button</button>
            </div>
            
            <div className="card flex flex-wrap gap-4">
              <button className="bg-blue text-white py-2 px-4 rounded-lg text-sm font-medium shadow-md hover:bg-blue-dark transition-all duration-300">Small</button>
              <button className="bg-blue text-white py-3 px-6 rounded-xl font-medium shadow-md hover:bg-blue-dark transition-all duration-300">Medium</button>
              <button className="bg-blue text-white py-4 px-8 rounded-xl font-medium shadow-md hover:bg-blue-dark transition-all duration-300">Large</button>
            </div>
          </div>
        </section>
        
        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-dark mb-6 font-['Alexandria'] border-b pb-2">Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Card */}
            <div className="card">
              <h3 className="text-xl font-bold text-blue-dark mb-3 font-['Alexandria']">Basic Card</h3>
              <p className="text-gray-600">
                A simple card component with rounded corners and shadow.
              </p>
            </div>
            
            {/* Feature Card */}
            <div className="card">
              <div className="w-12 h-12 rounded-2xl bg-blue flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-dark mb-3 font-['Alexandria']">Feature Card</h3>
              <p className="text-gray-600">
                Card with icon, heading and description text.
              </p>
            </div>
            
            {/* Image Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-blue-dark"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-dark mb-3 font-['Alexandria']">Image Card</h3>
                <p className="text-gray-600 mb-4">
                  Card with image, heading and description text.
                </p>
                <a href="#" className="text-blue font-medium inline-flex items-center">
                  Call to action
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Form Elements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-dark mb-6 font-['Alexandria'] border-b pb-2">Form Elements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <div className="mb-4">
                <label htmlFor="input-example" className="block text-sm font-medium text-gray-700 mb-1">Text Input</label>
                <input 
                  type="text" 
                  id="input-example" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue shadow-sm" 
                  placeholder="Input placeholder"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="textarea-example" className="block text-sm font-medium text-gray-700 mb-1">Textarea</label>
                <textarea 
                  id="textarea-example" 
                  rows="3" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue shadow-sm" 
                  placeholder="Textarea placeholder"
                ></textarea>
              </div>
            </div>
            
            <div className="card">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Checkbox</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="checkbox-1" 
                      className="h-5 w-5 text-blue focus:ring-blue rounded"
                    />
                    <label htmlFor="checkbox-1" className="ml-2 block text-sm text-gray-700">
                      Checkbox Option
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Radio Buttons</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="radio-1" 
                      name="radio-group" 
                      className="h-5 w-5 text-blue focus:ring-blue"
                    />
                    <label htmlFor="radio-1" className="ml-2 block text-sm text-gray-700">
                      Radio Option
                    </label>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="select-example" className="block text-sm font-medium text-gray-700 mb-1">Select</label>
                <select 
                  id="select-example" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue shadow-sm"
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        
        {/* Navigation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-dark mb-6 font-['Alexandria'] border-b pb-2">Navigation</h2>
          
          <div className="card p-0 overflow-hidden">
            <div className="bg-blue p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full mr-3"></div>
                <span className="text-white font-bold font-['Alexandria']">BLUD SMK</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-white font-medium">Link 1</a>
                <a href="#" className="text-white font-medium">Link 2</a>
                <a href="#" className="text-white font-medium">Link 3</a>
              </div>
              <button className="md:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </section>
        
        {/* Alerts & Notifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-dark mb-6 font-['Alexandria'] border-b pb-2">Alerts & Notifications</h2>
          
          <div className="space-y-4">
            <div className="bg-blue bg-opacity-10 border-l-4 border-blue p-4 rounded-r-xl">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-dark">
                    Information alert - something the user should know about.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-r-xl">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-800">
                    Success alert - action has been completed successfully.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-r-xl">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-800">
                    Error alert - something went wrong that requires attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}