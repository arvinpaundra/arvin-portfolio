/* eslint-disable import/no-anonymous-default-export */
export default {
  header: {
    img: process.env.PUBLIC_URL + '/assets/arvin-img.png',
    alt: 'Arvin Paundra Ardana',
  },
  profile: {
    tentangSaya: {
      img: process.env.PUBLIC_URL + '/assets/profile.png',
      alt: 'Profile image',
      namaLengkap: 'Arvin Paundra Ardana',
      status: 'Mahasiswa Politeknik Negeri Cilacap',
      matkulFavorit: 'Pemrograman Web',
      alamat: 'Jl. Rinjani No. 44 Sidanegara, Cilacap',
    },
    hobby: {},
    education: [
      { id: 1, img: process.env.PUBLIC_URL + '/assets/education/pnc.jpg', alt: 'PNC', year: '2020 - sekarang', school: 'PoliteknikNegeri Cilacap' },
      { id: 2, img: process.env.PUBLIC_URL + '/assets/education/sma.jpg', alt: 'SMA2CLP', year: '2017 - 2020', school: 'SMA Negeri 2 Cilacap' },
      { id: 3, img: process.env.PUBLIC_URL + '/assets/education/smp.jpg', alt: 'SMP6CLP', year: '2014 - 2017', school: 'SMP Negeri 6 Cilacap' },
    ],
  },
  projects: [
    {
      id: 1,
      img: process.env.PUBLIC_URL + '/assets/projects/react-todo.png',
      alt: 'react todo',
      title: 'react-app',
      desc: 'Projek sederhana saya yaitu react-todo, dibuat menggunakan framework React. Terdapat fitur seperti filter berdasarkan prioritas, hapus task, dan mencoret task yang sudah terselesaikan.',
    },
    {
      id: 2,
      img: process.env.PUBLIC_URL + '/assets/projects/message-app.png',
      alt: 'message app',
      title: 'message-app',
      desc: 'Projek sederhana saya berikutnya yaitu message-app, dibuat dengan framework Express untuk API dan template engine EJS sebagai view nya. Projek ini terinspirasi dari web yang sempat viral, yaitu secreto.',
    },
    {
      id: 3,
      img: process.env.PUBLIC_URL + '/assets/projects/movielioo.png',
      alt: 'movielioo',
      title: 'movielioo',
      desc: 'Projek sederhana saya selanjutnya yaitu movielioo, dibuat dengan framework Express untuk API dan terintegrasi dengan MongoDB sebagai database-nya, kemudian untuk view di-handle oleh templating engine EJS. Projek ini menerapkan konsep MVC (Model-Controller-View). Fitur yang tersedia yaitu pengguna dapat menambahkan data movie, actor, dan director. Kemudian juga dapat melihat detailnya.',
    },
    {
      id: 4,
      img: process.env.PUBLIC_URL + '/assets/projects/note-app-backend.png',
      alt: 'note app backend',
      title: 'note-app-back-end',
      desc: 'Projek sederhana saya terakhir yaitu notes-app-back-end, sebuah submission projek RESTful API dari Dicoding dibuat dengan framework Hapi. Secara fungsionalitasnya sama dengan projek react-todo saya, hanya saja ini dibuat untuk bagian Back-End nya dengan menerapkan arsitektur REST.',
    },
  ],
  contacts: [
    { id: 1, img: process.env.PUBLIC_URL + '/assets/contacts/email.png', text: 'arvinpaundra06@gmail.com' },
    { id: 2, img: process.env.PUBLIC_URL + '/assets/contacts/chat.png', text: '0859-60202931' },
    { id: 3, img: process.env.PUBLIC_URL + '/assets/contacts/github.png', text: 'Arvin Paundra Ardana' },
    { id: 4, img: process.env.PUBLIC_URL + '/assets/contacts/instagram.png', text: 'arvinpaundra_' },
  ],
  stayConnected: {
    img: process.env.PUBLIC_URL + '/assets/stay-connected.png',
    alt: 'Stay Connected',
  },
  typed: ['Front-end Developer', 'Tech Stack Enthusiast', 'Movie Enjoyer'],
  cv: process.env.PUBLIC_URL + '/assets/cv_arvinpaundra.pdf',
};
