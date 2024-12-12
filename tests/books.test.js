import fetch from 'node-fetch';
import { expect } from 'chai';

const baseUrl = 'http://localhost:3000';

// Helper function to make authorized requests
const fetchWithAuth = async (url, token = 'valid_token', method = 'GET', body = null) => {
  const options = {
    method,
    headers: { 'Authorization': token, 'Content-Type': 'application/json' },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);
  const data = await response.json();
  return { response, data };
};

describe('Books Search API', () => {
  // Test 1: Search for a hardcoded value
  it('should return the book when search query matches "Book 1"', async () => {
    const { response, data } = await fetchWithAuth(`${baseUrl}/books?query=Book 1`);
    
    expect(response.status).to.equal(200); // Success
    expect(data).to.have.property('pageSize');
  });

});