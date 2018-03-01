/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Classes;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

/**
 *
 * @author Kevin
 */
public class Main {
    
    Ride[] rides;
    Car[] cars;
    
    int R, C, F, N, B, T;
    
    public Main() {
        String filename = "a_example";
        
        System.out.println("START: " + filename);
        
        readFile(filename + ".in");
        
        cars[0].addRide(rides[0]);
        cars[1].addRide(rides[1]);
        
        writeFile(filename + ".out");
        System.out.println("END");
    }
    
    
    
    public void writeFile(String filename) {
        try {
            FileWriter fw = new FileWriter(new File(filename));
            
            for (int i = 0; i < F; i++) {
                fw.write(cars[i].rides.size() + cars[i].getRides() + "\n");
            }
            
            fw.close();
        } catch (IOException ex) {
            System.out.println("error: " + ex.getMessage());
        }
    }
    
    public void readFile(String filename) {
        try {
            Scanner sc = new Scanner(new File(filename));
            
            R = sc.nextInt();
            C = sc.nextInt();
            F = sc.nextInt();
            N = sc.nextInt();
            B = sc.nextInt();
            T = sc.nextInt();
            
            rides = new Ride[N];
            cars = new Car[F];
            
            for (int i = 0; i < N; i++) {
                rides[i] = new Ride(sc.nextInt(),sc.nextInt(),sc.nextInt(),sc.nextInt(),sc.nextInt(),sc.nextInt(), i);
            }
            
            for (int i = 0; i < F; i++) {
                cars[i] = new Car(i);
            }
            
            sc.close();
        } catch (FileNotFoundException ex) {
            System.out.println("error: " + ex.getMessage());
        }
    }
    
    public static void main(String[] args) {
        new Main();
    }
    
}

class Car {
    int x, y;
    int id;
    
    ArrayList<Integer> rides = new ArrayList<>();
    int currentRide;
    
    public Car(int id) {
        x = 0; y = 0;
        this.id = id;
    }
    
    public void addRide(Ride r) {
        rides.add(r.id);
    }
    
    public String getRides() {
        String r = "";
        for (int i = 0; i < rides.size(); i++) {
            r += " " + rides.get(i);
        }
        return r;
    }
}

class Ride {
    public int a, b, x, y, s, f, id;

    public Ride(int a, int b, int x, int y, int s, int f, int id) {
        this.a = a;
        this.b = b;
        this.x = x;
        this.y = y;
        this.s = s;
        this.f = f;
        this.id = id;
    }
    
    
    
    public int getDist() {
        return Math.abs(a-x) + Math.abs(b-y);
    }
}