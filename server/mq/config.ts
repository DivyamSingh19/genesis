import amqp from "amqplib"

const connection = await amqp.connect(process.env.MQ_URL as string)

const channel1 = await connection.createChannel();
await channel1.prefetch(1)
console.log("MQ connected")