class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true
    validates_uniqueness_of :username, :case_sensitive => false
    validates :password, length: { minimum: 4 }
end
