import React from 'react';
import { motion } from 'framer-motion';
import {
  MusicIcon,
  FileTextIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  PlusIcon,
  UploadIcon,
  BookOpenIcon,
  AwardIcon } from
'lucide-react';
import { Page } from '../components/Navbar';
interface DashboardProps {
  setPage: (page: Page) => void;
}
export function Dashboard({ setPage }: DashboardProps) {
  const mockSongs = [
  {
    id: 1,
    title: 'Amapiano Dreams',
    artist: 'DJ Kasi',
    isrc: 'ZA-A1B-23-00001',
    status: 'Registered'
  },
  {
    id: 2,
    title: 'Ubuntu Vibes',
    artist: 'Thabo M.',
    isrc: 'ZA-A1B-23-00002',
    status: 'Pending SAMRO'
  },
  {
    id: 3,
    title: 'Gospel Morning',
    artist: 'Soweto Choir',
    isrc: 'ZA-A1B-23-00003',
    status: 'Draft'
  },
  {
    id: 4,
    title: 'Cape Town Nights',
    artist: 'Sarah J',
    isrc: 'ZA-A1B-23-00004',
    status: 'Registered'
  }];

  return (
    <div className="min-h-screen bg-navy py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Artist</h1>
            <p className="text-gray-400">
              Here's what's happening with your music rights today.
            </p>
          </div>
          <button
            onClick={() => setPage('song-form')}
            className="mt-4 md:mt-0 bg-gold hover:bg-gold-hover text-navy font-semibold px-6 py-3 rounded-xl flex items-center transition-colors shadow-lg">
            
            <PlusIcon className="w-5 h-5 mr-2" />
            Register New Song
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
          {
            label: 'Total Songs',
            value: '12',
            icon: MusicIcon,
            color: 'text-blue-400',
            bg: 'bg-blue-400/10'
          },
          {
            label: 'Forms Generated',
            value: '34',
            icon: FileTextIcon,
            color: 'text-purple-400',
            bg: 'bg-purple-400/10'
          },
          {
            label: 'Pending Submissions',
            value: '3',
            icon: AlertTriangleIcon,
            color: 'text-yellow-400',
            bg: 'bg-yellow-400/10'
          },
          {
            label: 'Royalties Tracked',
            value: 'R 4,250',
            icon: CheckCircleIcon,
            color: 'text-green-400',
            bg: 'bg-green-400/10'
          }].
          map((stat, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: i * 0.1
            }}
            className="bg-navy-light border border-navy-lighter rounded-2xl p-6">
            
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.bg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <h3 className="text-3xl font-syne font-bold mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          )}
        </div>

        {/* Quick Actions */}
        <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <button
            onClick={() => setPage('contract')}
            className="bg-gradient-to-br from-navy-light to-navy border border-navy-lighter hover:border-gold/50 rounded-2xl p-6 text-left transition-all group">
            
            <UploadIcon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-lg mb-2">Analyze Contract</h3>
            <p className="text-sm text-gray-400">
              Upload a deal and let AI explain the terms.
            </p>
          </button>

          <button
            onClick={() => setPage('knowledge')}
            className="bg-gradient-to-br from-navy-light to-navy border border-navy-lighter hover:border-gold/50 rounded-2xl p-6 text-left transition-all group">
            
            <BookOpenIcon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-lg mb-2">Knowledge Hub</h3>
            <p className="text-sm text-gray-400">
              Learn about SAMRO, CAPASSO, and royalties.
            </p>
          </button>

          <button
            onClick={() => setPage('quiz')}
            className="bg-gradient-to-br from-navy-light to-navy border border-navy-lighter hover:border-gold/50 rounded-2xl p-6 text-left transition-all group">
            
            <AwardIcon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-lg mb-2">Take the Quiz</h3>
            <p className="text-sm text-gray-400">
              Test your knowledge on music rights in SA.
            </p>
          </button>
        </div>

        {/* Recent Songs Table */}
        <div className="bg-navy-light border border-navy-lighter rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-navy-lighter flex justify-between items-center">
            <h2 className="text-xl font-bold">Recent Songs</h2>
            <button className="text-gold text-sm font-medium hover:underline">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy/50 text-gray-400 text-sm uppercase tracking-wider">
                  <th className="px-6 py-4 font-medium">Title</th>
                  <th className="px-6 py-4 font-medium">Artist</th>
                  <th className="px-6 py-4 font-medium">ISRC</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-lighter">
                {mockSongs.map((song) =>
                <tr
                  key={song.id}
                  className="hover:bg-navy/30 transition-colors">
                  
                    <td className="px-6 py-4 font-medium text-white">
                      {song.title}
                    </td>
                    <td className="px-6 py-4 text-gray-300">{song.artist}</td>
                    <td className="px-6 py-4 text-gray-400 font-mono text-sm">
                      {song.isrc}
                    </td>
                    <td className="px-6 py-4">
                      <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${song.status === 'Registered' ? 'bg-green-400/10 text-green-400' : song.status === 'Pending SAMRO' ? 'bg-yellow-400/10 text-yellow-400' : 'bg-gray-400/10 text-gray-400'}`}>
                      
                        {song.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gold transition-colors text-sm font-medium">
                        Edit
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>);

}