FactoryGirl.define do
  p "string"
  factory :space do
    name "Makers"
  end
end

describe 'Spaces API' do
  let(:space) { FactoryGirl.create(:space) }
  describe 'GET /spaces' do
    it 'returns the spaces' do
      #FactoryGirl.create :space, name: 'Makers'
      space = create(:space)
      p space
      get '/spaces', {}, { 'Accept' => 'application/json' }

      expect(response.status).to eq 200

      body = JSON.parse(response.body)
      space1 = body.map {|m| m["title"]}

      expect(space1).to match_array(['Makers'])
    end
  end
end
