describe 'Spaces API' do
  describe 'GET /spaces' do
    it 'returns the spaces' do
      FactoryGirl.build(:space)

      get '/spaces', {}, { 'Accept' => 'application/json' }

      expect(response.status).to eq 200

      body = JSON.parse(response.body)
      space1 = body.map {|m| m["title"]}

      expect(space1).to match_array(['Makers'])
    end
  end
end
