//react program에서 다양한 변수들을 저장해놓고 쉽게 꺼내 쓰는 공간

export const API_URL = process.env.NODE_ENV === 'production' ? "https://tutoring-app-server.herokuapp.com" : "http://localhost:8080";
