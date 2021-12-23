module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3d7624583b1b0f5cb95ae960aade8003'),
  },
});
