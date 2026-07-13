import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  PlusIcon,
  TrashIcon,
  CheckCircleIcon } from
'lucide-react';
import { Page } from '../components/Navbar';
interface SongFormProps {
  setPage: (page: Page) => void;
}
export function SongForm({ setPage }: SongFormProps) {
  const [step, setStep] = useState(1);
  const [isrcGenerated, setIsrcGenerated] = useState(false);
  // Mock state for dynamic composers
  const [composers, setComposers] = useState([
  {
    name: '',
    role: 'Composer',
    split: '100'
  }]
  );
  const addComposer = () => {
    setComposers([
    ...composers,
    {
      name: '',
      role: 'Composer',
      split: '0'
    }]
    );
  };
  const removeComposer = (index: number) => {
    if (composers.length > 1) {
      setComposers(composers.filter((_, i) => i !== index));
    }
  };
  const handleGenerateIsrc = () => {
    setIsrcGenerated(true);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage('generated-docs');
  };
  return (
    <div className="min-h-screen bg-navy py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Progress */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-6">Register New Song</h1>

          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-navy-lighter -z-10 rounded-full"></div>
            <div
              className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-gold -z-10 rounded-full transition-all duration-500"
              style={{
                width: `${(step - 1) / 2 * 100}%`
              }}>
            </div>

            {[1, 2, 3].map((i) =>
            <div
              key={i}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${step >= i ? 'bg-gold text-navy' : 'bg-navy-light border-2 border-navy-lighter text-gray-500'}`}>
              
                {step > i ? <CheckCircleIcon className="w-6 h-6" /> : i}
              </div>
            )}
          </div>
          <div className="flex justify-between mt-3 text-sm font-medium text-gray-400">
            <span>Song Details</span>
            <span>Rights & Credits</span>
            <span>Generate Forms</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-navy-light border border-navy-lighter rounded-3xl p-6 md:p-10 shadow-xl">
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* STEP 1: Song Details */}
              {step === 1 &&
              <motion.div
                key="step1"
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -20
                }}
                className="space-y-6">
                
                  <h2 className="text-2xl font-syne font-bold mb-6">
                    Song Details
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Song Title *
                      </label>
                      <input
                      type="text"
                      className="w-full bg-navy border border-navy-lighter rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                      placeholder="e.g. Amapiano Dreams"
                      required />
                    
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Primary Artist *
                        </label>
                        <input
                        type="text"
                        className="w-full bg-navy border border-navy-lighter rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="Artist Name"
                        required />
                      
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Featured Artists
                        </label>
                        <input
                        type="text"
                        className="w-full bg-navy border border-navy-lighter rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="Optional" />
                      
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Genre
                        </label>
                        <select className="w-full bg-navy border border-navy-lighter rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                          <option>Amapiano</option>
                          <option>Afrobeats</option>
                          <option>Kwaito</option>
                          <option>Gospel</option>
                          <option>Hip Hop</option>
                          <option>R&B</option>
                          <option>Jazz</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Release Date
                        </label>
                        <input
                        type="date"
                        className="w-full bg-navy border border-navy-lighter rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                      
                      </div>
                    </div>
                  </div>
                </motion.div>
              }

              {/* STEP 2: Rights & Credits */}
              {step === 2 &&
              <motion.div
                key="step2"
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -20
                }}
                className="space-y-6">
                
                  <h2 className="text-2xl font-syne font-bold mb-6">
                    Rights & Credits
                  </h2>

                  <div className="space-y-6">
                    {/* Composers Section */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <label className="block text-sm font-medium text-gray-300">
                          Composers & Writers (Split Sheet)
                        </label>
                        <button
                        type="button"
                        onClick={addComposer}
                        className="text-gold text-sm font-medium flex items-center hover:underline">
                        
                          <PlusIcon className="w-4 h-4 mr-1" /> Add Person
                        </button>
                      </div>

                      <div className="space-y-3">
                        {composers.map((composer, index) =>
                      <div key={index} className="flex gap-3 items-start">
                            <input
                          type="text"
                          placeholder="Full Legal Name"
                          className="flex-1 bg-navy border border-navy-lighter rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                        
                            <select className="w-32 bg-navy border border-navy-lighter rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                              <option>Composer</option>
                              <option>Lyricist</option>
                              <option>Producer</option>
                            </select>
                            <div className="relative w-24">
                              <input
                            type="number"
                            placeholder="100"
                            className="w-full bg-navy border border-navy-lighter rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors pr-8" />
                          
                              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                %
                              </span>
                            </div>
                            {composers.length > 1 &&
                        <button
                          type="button"
                          onClick={() => removeComposer(index)}
                          className="p-3 text-gray-500 hover:text-red-400 transition-colors mt-1">
                          
                                <TrashIcon className="w-5 h-5" />
                              </button>
                        }
                          </div>
                      )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-navy-lighter">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Publisher (Optional)
                        </label>
                        <input
                        type="text"
                        className="w-full bg-navy border border-navy-lighter rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="Publishing Company" />
                      
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Record Label (Optional)
                        </label>
                        <input
                        type="text"
                        className="w-full bg-navy border border-navy-lighter rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="Label Name" />
                      
                      </div>
                    </div>

                    <div className="pt-4 border-t border-navy-lighter">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        ISRC Code
                      </label>
                      <div className="flex gap-3">
                        <input
                        type="text"
                        value={isrcGenerated ? 'ZA-A1B-26-00123' : ''}
                        readOnly={isrcGenerated}
                        className="flex-1 bg-navy border border-navy-lighter rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors font-mono"
                        placeholder="Leave blank to generate" />
                      
                        {!isrcGenerated &&
                      <button
                        type="button"
                        onClick={handleGenerateIsrc}
                        className="bg-navy-lighter hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                        
                            Generate
                          </button>
                      }
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        International Standard Recording Code. Required for
                        royalties.
                      </p>
                    </div>
                  </div>
                </motion.div>
              }

              {/* STEP 3: Generate Forms */}
              {step === 3 &&
              <motion.div
                key="step3"
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -20
                }}
                className="space-y-6">
                
                  <h2 className="text-2xl font-syne font-bold mb-2">
                    Select Documents to Generate
                  </h2>
                  <p className="text-gray-400 mb-6">
                    Choose which CMO forms and documents you need for this
                    release.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                  {
                    id: 'samro',
                    title: 'SAMRO Notification',
                    desc: 'For composer/publisher performance royalties'
                  },
                  {
                    id: 'capasso',
                    title: 'CAPASSO Registration',
                    desc: 'For mechanical royalties'
                  },
                  {
                    id: 'sampra',
                    title: 'SAMPRA Registration',
                    desc: 'For neighbouring rights (need master ownership)'
                  },
                  {
                    id: 'risa',
                    title: 'RISA Registration',
                    desc: 'For official SA chart tracking'
                  },
                  {
                    id: 'split',
                    title: 'Split Sheet PDF',
                    desc: 'Legal document for all collaborators'
                  },
                  {
                    id: 'meta',
                    title: 'Distributor Metadata',
                    desc: 'CSV format ready for Spotify/Apple Music'
                  }].
                  map((doc) =>
                  <label
                    key={doc.id}
                    className="flex items-start p-4 bg-navy border border-navy-lighter rounded-xl cursor-pointer hover:border-gold/50 transition-colors group">
                    
                        <div className="flex items-center h-5 mt-1">
                          <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 rounded border-gray-600 text-gold focus:ring-gold bg-navy accent-gold" />
                      
                        </div>
                        <div className="ml-3">
                          <span className="block text-white font-medium group-hover:text-gold transition-colors">
                            {doc.title}
                          </span>
                          <span className="block text-sm text-gray-400 mt-1">
                            {doc.desc}
                          </span>
                        </div>
                      </label>
                  )}
                  </div>
                </motion.div>
              }
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10 pt-6 border-t border-navy-lighter">
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className={`px-6 py-3 rounded-xl font-medium flex items-center transition-colors ${step === 1 ? 'invisible' : 'bg-navy hover:bg-navy-lighter text-white border border-navy-lighter'}`}>
                
                <ChevronLeftIcon className="w-5 h-5 mr-1" /> Back
              </button>

              {step < 3 ?
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="bg-gold hover:bg-gold-hover text-navy px-8 py-3 rounded-xl font-bold flex items-center transition-colors">
                
                  Next Step <ChevronRightIcon className="w-5 h-5 ml-1" />
                </button> :

              <button
                type="submit"
                className="bg-gold hover:bg-gold-hover text-navy px-8 py-3 rounded-xl font-bold flex items-center transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(245,166,35,0.4)]">
                
                  Generate Documents{' '}
                  <CheckCircleIcon className="w-5 h-5 ml-2" />
                </button>
              }
            </div>
          </form>
        </div>
      </div>
    </div>);

}