import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 5000,
  duration: '5s',
};

export default function () {
  http.get('http://localhost:9002/qa/5f8f13217f4286946c79f912');
  sleep(1);
}
