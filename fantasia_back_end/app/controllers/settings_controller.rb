class SettingsController < ApplicationController
    def index
        @settings = Setting.all
    end

    def new
        @setting = Setting.new
    end

    def create
        @setting = User.create(setting_strong_params)
    end

    private

    def setting_strong_params
    params.require(:user).permit(:name, :attack, :decay, :sustain, :release, :_attackCurve, :_releaseCurve)
    end
end
