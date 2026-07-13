import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DownloadIcon,
  ShareIcon,
  FileTextIcon,
  CheckCircleIcon } from
'lucide-react';
import { Page } from '../components/Navbar';
interface GeneratedDocsProps {
  setPage: (page: Page) => void;
}
export function GeneratedDocs({ setPage }: GeneratedDocsProps) {
  const [activeTab, setActiveTab] = useState('samro');
  const tabs = [
  {
    id: 'samro',
    label: 'SAMRO Form'
  },
  {
    id: 'capasso',
    label: 'CAPASSO Form'
  },
  {
    id: 'split',
    label: 'Split Sheet'
  },
  {
    id: 'metadata',
    label: 'Metadata CSV'
  }];

  return (
    <div className="min-h-screen bg-navy py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{
              scale: 0
            }}
            animate={{
              scale: 1
            }}
            className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            
            <CheckCircleIcon className="w-10 h-10 text-green-400" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Documents Generated Successfully!
          </h1>
          <p className="text-gray-400 text-lg">
            Your forms are ready to be signed and submitted to the respective
            CMOs.
          </p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex space-x-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {tabs.map((tab) =>
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab.id ? 'bg-gold text-navy' : 'bg-navy-light text-gray-400 hover:text-white border border-navy-lighter'}`}>
              
                {tab.label}
              </button>
            )}
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center px-4 py-2.5 bg-navy-light border border-navy-lighter hover:border-gold/50 rounded-xl text-sm font-medium transition-colors">
              <ShareIcon className="w-4 h-4 mr-2" /> Share All
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center px-4 py-2.5 bg-gold hover:bg-gold-hover text-navy rounded-xl text-sm font-bold transition-colors shadow-lg">
              <DownloadIcon className="w-4 h-4 mr-2" /> Download All ZIP
            </button>
          </div>
        </div>

        {/* Document Preview Area */}
        <motion.div
          key={activeTab}
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="bg-white rounded-lg shadow-2xl overflow-hidden min-h-[600px] relative">
          
          {/* Mock Document Header */}
          <div className="bg-gray-100 border-b border-gray-200 px-6 py-4 flex justify-between items-center text-navy">
            <div className="flex items-center">
              <FileTextIcon className="w-5 h-5 text-gray-500 mr-2" />
              <span className="font-medium">
                {activeTab === 'samro' ?
                'SAMRO_Notification_Amapiano_Dreams.pdf' :
                activeTab === 'capasso' ?
                'CAPASSO_Reg_Amapiano_Dreams.pdf' :
                activeTab === 'split' ?
                'Split_Sheet_Amapiano_Dreams.pdf' :
                'Metadata_Amapiano_Dreams.csv'}
              </span>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
              <DownloadIcon className="w-4 h-4 mr-1" /> Download PDF
            </button>
          </div>

          {/* Mock Document Content based on tab */}
          <div className="p-8 md:p-16 text-gray-800 font-serif max-w-3xl mx-auto">
            {activeTab === 'samro' &&
            <div className="space-y-8">
                <div className="text-center border-b-2 border-black pb-6 mb-8">
                  <h2 className="text-2xl font-bold tracking-widest uppercase">
                    SAMRO
                  </h2>
                  <p className="text-sm uppercase tracking-wider mt-2">
                    Notification of Works Form
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div className="border border-gray-300 p-4">
                    <span className="text-gray-500 text-xs uppercase block mb-1">
                      Title of Work
                    </span>
                    <span className="font-bold text-lg">Amapiano Dreams</span>
                  </div>
                  <div className="border border-gray-300 p-4">
                    <span className="text-gray-500 text-xs uppercase block mb-1">
                      Duration
                    </span>
                    <span className="font-bold text-lg">04:32</span>
                  </div>
                  <div className="border border-gray-300 p-4 col-span-2">
                    <span className="text-gray-500 text-xs uppercase block mb-1">
                      ISRC Code
                    </span>
                    <span className="font-mono text-lg">ZA-A1B-26-00123</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold border-b border-gray-300 pb-2 mb-4">
                    Interested Parties (Splits)
                  </h3>
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">
                          Name
                        </th>
                        <th className="border border-gray-300 p-2 text-left">
                          Role
                        </th>
                        <th className="border border-gray-300 p-2 text-center">
                          Share %
                        </th>
                        <th className="border border-gray-300 p-2 text-center">
                          Signature
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">
                          Thabo M.
                        </td>
                        <td className="border border-gray-300 p-3">Composer</td>
                        <td className="border border-gray-300 p-3 text-center">
                          50%
                        </td>
                        <td className="border border-gray-300 p-3"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">
                          Sarah J.
                        </td>
                        <td className="border border-gray-300 p-3">Lyricist</td>
                        <td className="border border-gray-300 p-3 text-center">
                          50%
                        </td>
                        <td className="border border-gray-300 p-3"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            }

            {activeTab === 'split' &&
            <div className="space-y-8">
                <div className="text-center pb-6 mb-8">
                  <h2 className="text-3xl font-bold uppercase">
                    Songwriter Split Sheet
                  </h2>
                  <p className="text-sm mt-2">
                    Date: {new Date().toLocaleDateString()}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 border border-gray-200 rounded">
                  <p className="mb-2">
                    <span className="font-bold w-32 inline-block">
                      Song Title:
                    </span>{' '}
                    Amapiano Dreams
                  </p>
                  <p className="mb-2">
                    <span className="font-bold w-32 inline-block">Artist:</span>{' '}
                    DJ Kasi
                  </p>
                  <p className="mb-2">
                    <span className="font-bold w-32 inline-block">Studio:</span>{' '}
                    Soweto Sound Labs
                  </p>
                </div>

                <p className="text-sm leading-relaxed">
                  This document serves as a binding agreement between the
                  undersigned parties regarding the ownership and division of
                  revenues for the musical composition titled above.
                </p>

                <div className="space-y-12 mt-12">
                  {[1, 2].map((i) =>
                <div
                  key={i}
                  className="border-t border-dashed border-gray-400 pt-6 grid grid-cols-2 gap-8">
                  
                      <div>
                        <p className="text-xs text-gray-500 uppercase mb-1">
                          Writer {i}
                        </p>
                        <div className="border-b border-black h-8 mb-4"></div>
                        <p className="text-xs text-gray-500 uppercase mb-1">
                          PRO Affiliation (e.g. SAMRO)
                        </p>
                        <div className="border-b border-black h-8"></div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase mb-1">
                          Ownership Percentage
                        </p>
                        <div className="border-b border-black h-8 mb-4 flex items-end pb-1 font-bold">
                          50%
                        </div>
                        <p className="text-xs text-gray-500 uppercase mb-1">
                          Signature
                        </p>
                        <div className="border-b border-black h-8"></div>
                      </div>
                    </div>
                )}
                </div>
              </div>
            }

            {(activeTab === 'capasso' || activeTab === 'metadata') &&
            <div className="flex flex-col items-center justify-center h-full pt-32 text-center">
                <FileTextIcon className="w-16 h-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-600 mb-2">
                  Preview Available in Pro
                </h3>
                <p className="text-gray-500 max-w-md">
                  Download the file to view the complete generated document with
                  all your metadata perfectly formatted.
                </p>
              </div>
            }
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setPage('dashboard')}
            className="text-gray-400 hover:text-white transition-colors underline">
            
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>);

}