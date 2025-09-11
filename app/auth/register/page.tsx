'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Mail, Lock, User, Phone, Building } from 'lucide-react';

export default function RegisterPage() {
  const [playerForm, setPlayerForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const [ownerForm, setOwnerForm] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center mb-4">
            <div className="bg-green-500 rounded-lg p-2 mr-3">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-600">TurfBook</h1>
              <p className="text-xs text-gray-500">Sangli & Miraj</p>
            </div>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Join TurfBook</h2>
          <p className="text-gray-600 mt-2">Create your account to get started</p>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-center">Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="player" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="player">Player</TabsTrigger>
                <TabsTrigger value="owner">Turf Owner</TabsTrigger>
              </TabsList>
              
              <TabsContent value="player">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="player-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="player-name"
                        placeholder="John Doe"
                        className="pl-10"
                        value={playerForm.name}
                        onChange={(e) => setPlayerForm({...playerForm, name: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="player-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="player-email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="pl-10"
                        value={playerForm.email}
                        onChange={(e) => setPlayerForm({...playerForm, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="player-phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="player-phone"
                        placeholder="+91 98765 43210"
                        className="pl-10"
                        value={playerForm.phone}
                        onChange={(e) => setPlayerForm({...playerForm, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="player-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="player-password"
                        type="password"
                        placeholder="Create a strong password"
                        className="pl-10"
                        value={playerForm.password}
                        onChange={(e) => setPlayerForm({...playerForm, password: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="player-confirm">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="player-confirm"
                        type="password"
                        placeholder="Confirm your password"
                        className="pl-10"
                        value={playerForm.confirmPassword}
                        onChange={(e) => setPlayerForm({...playerForm, confirmPassword: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="player-terms"
                      checked={playerForm.acceptTerms}
                      onCheckedChange={(checked) => setPlayerForm({...playerForm, acceptTerms: checked as boolean})}
                    />
                    <Label htmlFor="player-terms" className="text-sm">
                      I agree to the{' '}
                      <Link href="/terms" className="text-green-600 hover:underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-green-600 hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button className="w-full bg-green-500 hover:bg-green-600" size="lg">
                    Create Player Account
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="owner">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="owner-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="owner-name"
                        placeholder="John Doe"
                        className="pl-10"
                        value={ownerForm.name}
                        onChange={(e) => setOwnerForm({...ownerForm, name: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="owner-business">Business/Turf Name</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="owner-business"
                        placeholder="Green Field Sports Complex"
                        className="pl-10"
                        value={ownerForm.businessName}
                        onChange={(e) => setOwnerForm({...ownerForm, businessName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="owner-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="owner-email"
                        type="email"
                        placeholder="owner@example.com"
                        className="pl-10"
                        value={ownerForm.email}
                        onChange={(e) => setOwnerForm({...ownerForm, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="owner-phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="owner-phone"
                        placeholder="+91 98765 43210"
                        className="pl-10"
                        value={ownerForm.phone}
                        onChange={(e) => setOwnerForm({...ownerForm, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="owner-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="owner-password"
                        type="password"
                        placeholder="Create a strong password"
                        className="pl-10"
                        value={ownerForm.password}
                        onChange={(e) => setOwnerForm({...ownerForm, password: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="owner-confirm">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="owner-confirm"
                        type="password"
                        placeholder="Confirm your password"
                        className="pl-10"
                        value={ownerForm.confirmPassword}
                        onChange={(e) => setOwnerForm({...ownerForm, confirmPassword: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="owner-terms"
                      checked={ownerForm.acceptTerms}
                      onCheckedChange={(checked) => setOwnerForm({...ownerForm, acceptTerms: checked as boolean})}
                    />
                    <Label htmlFor="owner-terms" className="text-sm">
                      I agree to the{' '}
                      <Link href="/terms" className="text-green-600 hover:underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-green-600 hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button className="w-full bg-blue-500 hover:bg-blue-600" size="lg">
                    Create Owner Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-green-600 hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}