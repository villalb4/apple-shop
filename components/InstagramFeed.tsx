"use client";

import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Instagram,
} from "lucide-react";

interface InstagramPost {
  id: string;
  username: string;
  userAvatar: string;
  postImage: string;
  likes: number;
  caption: string;
  timestamp: string;
  postUrl: string;
}

// 🎯 CONFIGURA TUS POSTS AQUÍ
const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "1",
    username: "tu_usuario",
    userAvatar: "/avatar-placeholder.jpg", // Reemplaza con tu avatar
    postImage: "/post-image-1.jpg", // Reemplaza con la imagen del post
    likes: 1234,
    caption: "iPhone 16 Pro Max - Disponible ahora 📱✨ #iPhone #Apple",
    timestamp: "2 DAYS AGO",
    postUrl: "https://www.instagram.com/p/DOTcY9vDRbG/",
  },
  {
    id: "2",
    username: "tu_usuario",
    userAvatar: "/avatar-placeholder.jpg",
    postImage: "/post-image-2.jpg",
    likes: 856,
    caption: "MacBook Air M3 - Potencia y elegancia 💻 #MacBook #Tech",
    timestamp: "5 DAYS AGO",
    postUrl: "https://www.instagram.com/p/DRckfmfEW3r/",
  },
  {
    id: "3",
    username: "tu_usuario",
    userAvatar: "/avatar-placeholder.jpg",
    postImage: "/post-image-2.jpg",
    likes: 856,
    caption: "MacBook Air M3 - Potencia y elegancia 💻 #MacBook #Tech",
    timestamp: "5 DAYS AGO",
    postUrl: "https://www.instagram.com/p/DRckfmfEW3r/",
  },
  {
    id: "4",
    username: "tu_usuario",
    userAvatar: "/avatar-placeholder.jpg",
    postImage: "/post-image-3.jpg",
    likes: 856,
    caption: "MacBook Air M3 - Potencia y elegancia 💻 #MacBook #Tech",
    timestamp: "5 DAYS AGO",
    postUrl: "https://www.instagram.com/p/DRckfmfEW3r/",
  },
];

export default function InstagramFeed() {
  return (
    <section className="w-full">
      <div className="container">
        <div className="flex items-center justify-start gap-4 mb-6">
          <h2 className="text-xl font-light text-gray-400">Instagram Feed</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <InstagramPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramPostCard({ post }: { post: InstagramPost }) {
  return (
    <div className="bg-white border w-full">
      <div className="flex items-center justify-between px-4 py-3">
        <a
          href={post.postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-gray-900 hover:text-gray-600"
        >
          {post.username}
        </a>
      </div>

      {/* Image */}
      <div className="relative w-full aspect-square bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        {/* Placeholder - reemplaza con tus imágenes reales */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-2">
              <Instagram className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
