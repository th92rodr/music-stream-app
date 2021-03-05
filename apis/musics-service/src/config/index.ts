export default {
  channels: {
    grpc: {
      host: '0.0.0.0',
      port: Number(process.env.GRPC_PORT) || 6565,
    },
  },
};
