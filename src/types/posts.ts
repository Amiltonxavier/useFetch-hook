export interface User {
  userId: string;
  name: string;
  email: string;
  profilePicture: string;
  bio: string;
}

// Definição de tipo para Post
export interface Post {
  id: string;
  title: string;
  content: string;
  views: number;
  createdAt: string; // Data no formato ISO 8601 (ex: "2024-12-20T10:00:00Z")
  updatedAt: string; // Data no formato ISO 8601
  userId: string; // Referência ao usuário que criou o post
}

// Definição de tipo para Comentário
export interface Comment {
  id: string;
  text: string;
  postId: string; // Referência ao post que o comentário pertence
  userId: string; // Referência ao usuário que fez o comentário
  createdAt: string; // Data no formato ISO 8601
}

// Definição do mock completo
