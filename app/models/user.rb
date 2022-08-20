class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :locations, through: :reviews
    
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { in: 6..25}
    validates :username, format: { with: /\A[a-z0-9A-Z ]+\z/, message: "can only contain letters and numbers, no unique symbols." }
    validates :password, presence: true
    validates :password, length: { in: 6..20 }
    # validates :password_digest, confirmation: true
    # validate :unpermitted_username

    def unpermitted_username
        unless username.starts_with?(/\A[a-zA-Z ]+\z/)
            errors.add(:unpermitted_username, ": Your username must start with a letter")
        end
    end
end
