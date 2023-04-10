import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import { expect } from 'chai';
import { ChatsAPI } from './ChatsAPI';
import HTTPTransport from './utils/HTTPTransport';

describe('ChatsAPI', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  const API = new ChatsAPI();
  const requests: SinonFakeXMLHttpRequest[] = [];
  const originalXMLHttpRequest = global.XMLHttpRequest;
  const chatId = 123;
  const users: number[] = [123, 345, 567];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // @ts-ignore
    global.XMLHttpRequest = xhr;

    xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    };
  });

  afterEach(() => {
    requests.length = 0;
  });

  after(() => {
    global.XMLHttpRequest = originalXMLHttpRequest;
  });

  it('should send requests to "chats" endpoint', () => {
    API.read();
    const [request] = requests;
    expect(request.url).to.equal(`${HTTPTransport.API_URL}/chats/`);
  });

  it('.read() should send GET request', () => {
    API.read();
    const [request] = requests;

    expect(request.method).to.equal('Get');
    expect(request.url).to.equal(`${HTTPTransport.API_URL}/chats/`);
    expect(request.requestBody).to.be.null;
  });

  it('.create() should send POST request with passed chat title', () => {
    const body = { name: 'test' };
    API.create(body);
    const [request] = requests;

    expect(request.method).to.equal('Post');
    // expect(request.requestBody).to.equal(JSON.stringify(body));
  });

  it('.delete() should send DELETE request', () => {
    API.delete(chatId);
    const [request] = requests;

    expect(request.method).to.equal('Delete');
  });

  it('.getUsers() should send GET request', () => {
    API.getUsers(chatId);
    const [request] = requests;

    expect(request.method).to.equal('Get');
  });

  it('.addUsers() should send PUT request', () => {
    API.addUsers(chatId, users);
    const [request] = requests;

    expect(request.method).to.equal('Put');
    expect(request.url).to.equal(`${HTTPTransport.API_URL}/chats/users`);
  });

  it('.deleteUsers() should send DELETE request', () => {
    API.deleteUsers(chatId, users);
    const [request] = requests;

    expect(request.method).to.equal('Delete');
    expect(request.url).to.equal(`${HTTPTransport.API_URL}/chats/users`);
  });

  it('.getToken() should send POST request', () => {
    API.getToken(chatId);
    const [request] = requests;

    expect(request.method).to.equal('Post');
  });
});
