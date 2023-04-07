module.exports = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};
