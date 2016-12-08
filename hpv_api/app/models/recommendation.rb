class Recommendation < ApplicationRecord
  def self.make_new(answers)
    recommendation_generating_algorithm(answers)
  end

  private

  def self.recommendation_generating_algorithm(answers)
       #Will be replaced with actual algorithm when mentor supplies one
      i=0
      j=0
      answers.each_with_index do |answer, index|
        if index%2==0
          i+=answer.to_i
        elsif answer!=-1
          j+=answer.to_i
        end
      end
      rec = Recommendation.create({content: i, completed: true})
      rec = Recommendation.create({content: j, completed: true})
      return false if !rec.valid?
      true
  end
end
